// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore/lite';
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
  measurementId: "G-KW0KJMFLQE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getTasks() {
    const taskCollection = collection(db, 'tasks');
    const taskDocs = await getDocs(taskCollection);
    const taskList = taskDocs.docs.map(doc => {
        const document = {
            id: doc.id, 
            data: doc.data()
        };
            return document;
    });

    return {
        tasks: Array.from(taskList),
      };
}

export async function createTask(task) {
    try {
        const docRef = await addDoc(collection(db, 'tasks'), {
            title: task.title,
            difficulty: task.difficulty
        });
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}

export async function deleteTask(taskId) {
    await deleteDoc(doc(db, 'tasks', taskId));
}
