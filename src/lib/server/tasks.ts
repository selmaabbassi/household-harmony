import { collection, onSnapshot } from "firebase/firestore";
import { writable } from "svelte/store";
import { db } from "./firebase";

function tasksStore() {
    const {subscribe} = writable([], (set) => {
        onSnapshot(collection(db, "tasks"), (snapshot) => {
            const tasks: any = []
            snapshot.forEach((task) => {
                tasks.push({ ...task.data(), id: task.id})
            })
            set(tasks)
        })
    })

    return {
        subscribe
    }
}

export default tasksStore;