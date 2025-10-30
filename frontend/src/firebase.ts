// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA3BZQbpLSlWGPf7m5_7ja08lq5w4t1Tbg",
  authDomain: "kashish-89488.firebaseapp.com",
  projectId: "kashish-89488",
  storageBucket: "kashish-89488.firebasestorage.app",
  messagingSenderId: "647174118713",
  appId: "1:647174118713:web:e542368dad1b2ebd305ce8",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
