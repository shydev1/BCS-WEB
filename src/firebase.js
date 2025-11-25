import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  // apiKey: "AIzaSyBlbmEz0BX3vaBdkiUZ6p_rlPNHPWvsvzg",
  // authDomain: "scooter-beccf.firebaseapp.com",
  // projectId: "scooter-beccf",
  // storageBucket: "scooter-beccf.appspot.com",
  // messagingSenderId: "370422506482",
  // appId: "1:370422506482:web:16590e7abafdeb6628416b",
  // measurementId: "G-QB9PQ4ZMM2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {
  auth, db, createUserWithEmailAndPassword, setDoc,
  signInWithEmailAndPassword, getDoc, updateDoc,
  storage, ref, uploadBytes, getDownloadURL, doc, onAuthStateChanged, signOut
};
