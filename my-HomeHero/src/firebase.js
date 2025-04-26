// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa6hBcScD6kBkwMPD76DdT2X-eHZ6c19o",
  authDomain: "my-homehero.firebaseapp.com",
  projectId: "my-homehero",
  storageBucket: "my-homehero.firebasestorage.app",
  messagingSenderId: "928681816838",
  appId: "1:928681816838:web:d3d82f7fd797d3ee12e487",
  measurementId: "G-0Q75QM1HCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();