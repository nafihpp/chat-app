import { createContext, useContext } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState("");
    async function signUp(email, password) {
        return await createUserWithEmailAndPassword(auth, email, password);
    }
    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe;
    }, []);
    return (
        <AuthContext.Provider value={{ user, signUp, logIn }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    return useContext(AuthContext);
}
