import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

import PropTypes from 'prop-types';
import axios from "axios";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const Authproviders = ({children}) => {
    const [user ,setuser] = useState(null)
    const [loading , setloading] = useState(true)
    useEffect(()=>{
        const Unsubscribe = onAuthStateChanged(auth , currentUser => {
            console.log('user in auth state changes' , currentUser)
            const loggedEmail = currentUser?.email || user?.email
            const loggedUser = {email : loggedEmail}
            setuser(currentUser)
            setloading(false)
            if(currentUser){
                
                axios.post('http://localhost:5000/jwt' ,loggedUser , {withCredentials : true})
                .then(res => {
                    console.log(res.data);
                })
            }
            else{
                axios.post('http://localhost:5000/logout' ,loggedUser , {withCredentials : true})
                .then(res => {
                    console.log(res.data);
                })

            }
            
              


    })



        return () => {
            Unsubscribe()
        }
     },[])



    // create user
    const createUser = (email , password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }
    // login user
    const loginUser = (email , password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }

    // logout user
    const logout = () => {
        setloading(true)
        return signOut(auth)
    }

    // Login USer with Google
    const googleprovider = new GoogleAuthProvider();
    const GoogleLogin = () => {
        setloading(true)
        return signInWithPopup(auth, googleprovider)
    }

    const authInfo = {
        user,
        createUser,
        loginUser,
        logout,
        loading,
        GoogleLogin

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