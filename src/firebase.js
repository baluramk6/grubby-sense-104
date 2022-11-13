// Import the functions you need from the SDKs you need
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { env } from "process"


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQiTIGfuZ_bRWH-8vVXumG3XlQSNV0Q7w",
  authDomain: "fashionlife-auth.firebaseapp.com",
  projectId: "fashionlife-auth",
  storageBucket: "fashionlife-auth.appspot.com",
  messagingSenderId: "313406050846",
  appId: "1:313406050846:web:b58714102d987c9bcf140f",
  measurementId: "G-DTPK544KN3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
//const analytics = getAnalytics(app);
