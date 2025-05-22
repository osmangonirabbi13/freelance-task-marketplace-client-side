import React, { createContext, useEffect, useState, useContext } from "react";
import auth from "../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

// Auth Context
export const AuthContext = createContext();

// Theme Context
export const ThemeContext = createContext({
  darkMode: true,
  toggleDarkMode: () => {},
});

// Custom Hook to access Theme Context
export const useTheme = () => useContext(ThemeContext);

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  // 🔐 Auth State
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🌙 Theme State
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored === "true";
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [darkMode]);

  // 🔁 Firebase Auth Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // 🔧 Auth Methods
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => signOut(auth);

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const updateUserProfile = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  const authData = {
    user,
    setUser,
    loading,
    createUser,
    updateUserProfile,
    logOut,
    signIn,
    signInGoogle,
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
    </ThemeContext.Provider>
  );
};

export default AuthProvider;
