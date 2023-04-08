import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD4OYzBdLaK0Hyh1bR3HkE_0XgKNuAJfFE",
  authDomain: "nextjs-105db.firebaseapp.com",
  projectId: "nextjs-105db",
  storageBucket: "nextjs-105db.appspot.com",
  messagingSenderId: "527726835934",
  appId: "1:527726835934:web:6db600c3cb0c3193f8ea4f",
  measurementId: "G-5GX6EN0YQH"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const database = getFirestore();

export { app, database }
