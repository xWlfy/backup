// firebase.config.ts
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBba0lyajlVU98bXt828WP4TIBDHpYsqyo",
  authDomain: "soulstar-39119.firebaseapp.com",
  projectId: "soulstar-39119",
  storageBucket: "soulstar-39119.firebasestorage.app",
  messagingSenderId: "48346861206",
  appId: "1:48346861206:web:d9c035aeb93388a0e43cb7",
  measurementId: "G-PPSRDTXLN8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const analytics = getAnalytics(app);