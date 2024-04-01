import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // 
import auth from "../firebase/firebase.config";
import Login from "../componants/Login";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user ,setUser] =useState(null);
    
    const creatUser = (email , password) =>{
        return createUserWithEmailAndPassword(auth, email ,password)
    }
    const signInUser =(email , password) =>{
        return signInWithEmailAndPassword(auth ,email ,password)
    }
    const logOut =(email , password) =>{
        return signOut(auth)
    }

     useEffect(() =>{
     const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
         console.log('observing current user inside useeffect', currentUser)
         setUser (currentUser);
        });
        return () =>{
            unSubscribe();
        }
     
    },[])
    const authInfo ={user ,creatUser ,signInUser,logOut}
    return (
        <AuthContext.Provider value={authInfo }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

 AuthProvider.propTypes ={
    children:PropTypes.node
 }