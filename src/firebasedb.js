// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-xixzAvAN1AaowcY0CZdUrpwiifhZBjI",
  authDomain: "chat-on-d3da8.firebaseapp.com",
  projectId: "chat-on-d3da8",
  storageBucket: "chat-on-d3da8.appspot.com",
  messagingSenderId: "797006179135",
  appId: "1:797006179135:web:9821a35e45ff43e3c9018a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// module.exports.db = db;