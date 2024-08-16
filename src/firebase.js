// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCiV167s-mlc6wRe7sh1tT29ni1srSLhUo",
  authDomain: "full-stack-clone-69961.firebaseapp.com",
  projectId: "full-stack-clone-69961",
  storageBucket: "full-stack-clone-69961.appspot.com",
  messagingSenderId: "1077184784666",
  appId: "1:1077184784666:web:e177e63adaf1dc376364a3",
  measurementId: "G-YTZH6ECSW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();