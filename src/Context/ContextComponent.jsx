import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";

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
            if(currentUser){
                setUser(currentUser)
                setLoading(false)
                console.log(currentUser);
            }
            else{
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