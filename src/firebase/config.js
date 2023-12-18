import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, getDoc, 
        setDoc, addDoc, updateDoc, deleteDoc, doc,
        serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, 
        onAuthStateChanged, updateProfile } from "firebase/auth";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);



export {db, auth, collection, getDocs, getDoc, setDoc, 
    addDoc, updateDoc, deleteDoc, doc, 
    serverTimestamp, query, orderBy, onSnapshot,
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    signOut, onAuthStateChanged, updateProfile}