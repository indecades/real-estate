// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5a4d3.firebaseapp.com",
  projectId: "mern-estate-5a4d3",
  storageBucket: "mern-estate-5a4d3.appspot.com",
  messagingSenderId: "822242852850",
  appId: "1:822242852850:web:99862e71137cdd20a2f56b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);