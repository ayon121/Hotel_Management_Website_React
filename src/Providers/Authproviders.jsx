import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

import PropTypes from 'prop-types';
export const AuthContext = createContext(null)
const auth = getAuth(app);
const Authproviders = ({children}) => {
    const [user ,setuser] = useState(null)

    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth , email , password)
    }


    const authInfo = {
        user,
        createUser,

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