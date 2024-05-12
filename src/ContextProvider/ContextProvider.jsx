/* eslint-disable react/prop-types */
import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";
  import auth from "../Firebase/firebase.config";
import axios from "axios";
  
  
  
  export const AuthContext = createContext(null);
  
  export default function ContextProvider({ children }) {
    const githubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();
  
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true)
    const [theme,setTheme] = useState("light")
    const [menu, setMenu] = useState(false);
    
    
    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };
    const signInUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };
    const updateUserProfile = (user, update) => {
      return updateProfile(user, update);
      
    };
    const googleLogin =()=>{
    return  signInWithPopup(auth,googleProvider)
    }
  
    const githubLogin = ()=>{
      return signInWithPopup(auth,githubProvider)
    }
    const logOut =()=>{
      return signOut(auth)
    }
    
  
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = {email: userEmail}
        if (currentUser) {
          setUser(currentUser);
          setLoading(false)
          //if user exist then issue a token ===============================
          axios.post('http://localhost:5000/jwt',loggedUser,{withCredentials: true})
          .then(res =>{
            console.log('token response',res.data);
          })
          
        } else {
          setUser(null);
          setLoading(false)
          axios.post('http://localhost:5000/logout',loggedUser,{withCredentials:true})
          .then(res => {
            console.log(res.data);
          })
        }
      });
  
      return () => {
        unSubscribe();
      };
    }, [user?.email]);
  
    const authInfo = {
      user,
      createUser,
      signInUser,
      updateUserProfile,
      googleLogin,
      githubLogin,
      logOut,
      loading,
      setUser,
      setLoading,
      theme,
      setTheme,
      menu,
      setMenu
     
    };
    return (
      <>
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      </>
    );
  }