import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBN4KUKKhP4ecZTNppYBcZZTjUdr0U9mSo",
  authDomain: "maison-canela-83ea6.firebaseapp.com",
  projectId: "maison-canela-83ea6",
  storageBucket: "maison-canela-83ea6.appspot.com",
  messagingSenderId: "799888598417",
  appId: "1:799888598417:web:a602eea150e5479f0ca630"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);