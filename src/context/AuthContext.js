import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const Authcontext = createContext();

export function AuthcontextProvider({ children }) {
  const [user, setUser] = useState({});

  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "users", email), {
      movies: [],
    });
  }

  function logOut() {
    return signOut(auth);
  }

  function signIn(email, pass) {
    return signInWithEmailAndPassword(auth, email, pass);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  });

  return (
    <Authcontext.Provider value={{ user, signUp, signIn, logOut }}>
      {children}
    </Authcontext.Provider>
  );
}

export function UserAuth() {
  return useContext(Authcontext);
}
