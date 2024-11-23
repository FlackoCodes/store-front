import { initializeApp } from "firebase/app";
import { FIREBASE_API } from "./constants";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: FIREBASE_API,
  authDomain: "cake-haven.firebaseapp.com",
  projectId: "cake-haven",
  storageBucket: "cake-haven.firebasestorage.app",
  messagingSenderId: "993267044698",
  appId: "1:993267044698:web:b13f1d5dcc6ee76cf1a363",
  measurementId: "G-MY7BH9R0QW",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
