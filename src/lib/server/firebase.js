import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { firebaseConfig } from "./firebase.config";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getTasks() {
  const taskCollection = collection(db, "tasks");
  const taskDocs = await getDocs(taskCollection);
  const taskList = taskDocs.docs.map((doc) => {
    const document = {
      id: doc.id,
      data: doc.data(),
    };
    return document;
  });

  return {
    tasks: Array.from(taskList),
  };
}

export async function createTask(task) {
  try {
    const docRef = await addDoc(collection(db, "tasks"), {
      title: task.title,
      difficulty: task.difficulty,
    });
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

export async function deleteTask(taskId) {
  await deleteDoc(doc(db, "tasks", taskId));
}

export async function completeTask(taskId) {
  const taskRef = doc(db, "tasks", taskId);

  await updateDoc(taskRef, {
    completed: true,
  });
}

export async function editTask(task) {
  const taskRef = doc(db, "tasks", task.id);

  await updateDoc(taskRef, {
    title: task.title,
    difficulty: task.difficulty,
  });
}
