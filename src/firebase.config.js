// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA73HR69aiM9S7hHL8VS4OGQAIWvZYtJpM",
  authDomain: "fir-integrative-project.firebaseapp.com",
  projectId: "fir-integrative-project",
  storageBucket: "fir-integrative-project.appspot.com",
  messagingSenderId: "759398296269",
  appId: "1:759398296269:web:e6f78d09e2e315eb745784"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firebase Firestore and get a reference to the service
export const db = getFirestore(app);