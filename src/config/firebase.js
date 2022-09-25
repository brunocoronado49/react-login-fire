// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKgujNcEa6PFAFzCOUrstB5ly5UPwib58",
  authDomain: "react-login-3e58c.firebaseapp.com",
  projectId: "react-login-3e58c",
  storageBucket: "react-login-3e58c.appspot.com",
  messagingSenderId: "885885256919",
  appId: "1:885885256919:web:6f72799e96b3c114f6dc92",
  measurementId: "G-ZJLT5B7GFX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)