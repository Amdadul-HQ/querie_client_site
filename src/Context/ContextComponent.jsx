import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
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
    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth,currentUser =>{
            if(currentUser){
                setUser(currentUser)
                setLoading(false)
            }
            else{
                setUser(null)
                setLoading(false)
            }
        })
        return () => unSubcribe()
       },[])


    const info = {user,loading,createUser,signInGoogle,logOut
        
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextComponent;