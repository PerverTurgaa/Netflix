import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBf1JU71cBfGwNMiIfh4Ry22HRZ6DFEVVU",
  authDomain: "netflix-project-dade5.firebaseapp.com",
  projectId: "netflix-project-dade5",
  storageBucket: "netflix-project-dade5.appspot.com",
  messagingSenderId: "436139995900",
  appId: "1:436139995900:web:1a1f26b7a0d3b1b4231d79",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
