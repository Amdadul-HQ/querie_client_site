import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)

const ContextComponent = ({children}) => {

    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState(null)

    const googleProvider = new GoogleAuthProvider()
    
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUser = (name,photourl) => {
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photourl
        })
    }


    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth,currentUser =>{
            const userEmail = currentUser?.email || user?.email;
            const loggUser = {email:userEmail}
            if(currentUser){
                axios.post('http://localhost:5000/jwt',loggUser,{withCredentials:true})
                .then(res => {
                    console.log('token response',res.data);
                })
                .catch(error =>  {
                    console.log(error.message);
                })
                setUser(currentUser)
                setLoading(false)
                console.log(currentUser);
            }
            else{
                axios.post('http://localhost:5000/logout',loggUser,{withCredentials:true})
                .then(res => {
                    console.log(res.data);
                })
                .catch(error => {
                    console.log(error.message);
                })
                setUser(null)
                setLoading(false)
            }
        })
        return () => unSubcribe()
       },[])


    const info = {user,loading,createUser,signInGoogle,logOut,signIn,updateUser}
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextComponent;