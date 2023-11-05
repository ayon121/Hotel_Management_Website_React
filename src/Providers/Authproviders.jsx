import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

import PropTypes from 'prop-types';
export const AuthContext = createContext(null)
const auth = getAuth(app);
const Authproviders = ({children}) => {
    const [user ,setuser] = useState(null)
    useEffect(()=>{
        const Unsubscribe = onAuthStateChanged(auth , currentUser => {
            console.log('user in auth state changes' , currentUser)
            setuser(currentUser)
        })

        return () => {
            Unsubscribe()
        }
    },[])

    // create user
    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth , email , password)
    }
    // login user
    const loginUser = (email , password) => {
        return signInWithEmailAndPassword(auth , email , password)
    }

    // logout user
    const logout = () => {
        return signOut(auth)
    }



    const authInfo = {
        user,
        createUser,
        loginUser,
        logout

    }

    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

Authproviders.propTypes = {
    children : PropTypes.node
};

export default Authproviders;