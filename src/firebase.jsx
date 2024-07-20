// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHC-vrC-dX-ACAW7uaYY-1mVRs_uYxkBI",
  authDomain: "login-272ea.firebaseapp.com",
  projectId: "login-272ea",
  storageBucket: "login-272ea.appspot.com",
  messagingSenderId: "545147391818",
  appId: "1:545147391818:web:d055c246ee7634ecc13bb3",
  measurementId: "G-M5ST16E9LP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
export {auth}