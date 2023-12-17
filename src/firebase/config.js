import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, getDoc, 
        setDoc, addDoc, updateDoc, deleteDoc, doc,
        serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, 
        onAuthStateChanged, updateProfile } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCCpJY5VpI70AZnuv-BV4mi-P9LoRcZsT4",
    authDomain: "live-chat-67dab.firebaseapp.com",
    projectId: "live-chat-67dab",
    storageBucket: "live-chat-67dab.appspot.com",
    messagingSenderId: "429962221822",
    appId: "1:429962221822:web:f2a2d7c49a27af1419edaf"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);



export {db, auth, collection, getDocs, getDoc, setDoc, 
    addDoc, updateDoc, deleteDoc, doc, 
    serverTimestamp, query, orderBy, onSnapshot,
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    signOut, onAuthStateChanged, updateProfile}