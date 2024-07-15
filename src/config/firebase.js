// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBcw54J9TGeQ5LUbCQN7JRsqPLb4G9L3w",
  authDomain: "vite-contactapp-da06a.firebaseapp.com",
  projectId: "vite-contactapp-da06a",
  storageBucket: "vite-contactapp-da06a.appspot.com",
  messagingSenderId: "456897741356",
  appId: "1:456897741356:web:95278452c4b37673c30789",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
