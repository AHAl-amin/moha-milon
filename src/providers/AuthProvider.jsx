import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // 
import auth from "../firebase/firebase.config";
import Login from "../componants/Login";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user ,setUser] =useState(null);
    const [loading , setLoading] =useState(true);
    
    const creatUser = (email , password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email ,password)
    }
    const signInUser =(email , password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth ,email ,password)
    }

    
        const signInWithGoogle =() =>{
            setLoading(true);
            return signInWithPopup(auth ,googleProvider);
      }
    
    const logOut =(email , password) =>{
        setLoading(true)
        return signOut(auth)
    }

     useEffect(() =>{
     const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
         console.log('observing current user inside useeffect', currentUser)
         setUser (currentUser);
         setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
     
    },[])
    const authInfo ={user ,
        loading ,
       
            
        creatUser ,
        signInUser,
        signInWithGoogle, 
        logOut}
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