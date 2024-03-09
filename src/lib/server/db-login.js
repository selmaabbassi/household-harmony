import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMLSubnL5IaxjxKWjK-Ig4jgEZirjN2Iw",
  authDomain: "household-harmony-da08c.firebaseapp.com",
  projectId: "household-harmony-da08c",
  storageBucket: "household-harmony-da08c.appspot.com",
  messagingSenderId: "337338432690",
  appId: "1:337338432690:web:3dc98dd543a6bc38431dab",
  measurementId: "G-KW0KJMFLQE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export async function createUser(user) {
  console.log(user);
  createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}
