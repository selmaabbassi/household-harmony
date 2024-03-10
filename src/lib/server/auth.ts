import { writable } from "svelte/store";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

function authStore() {
  let unsubscribe: any;

  if (!auth || !globalThis.window) {
    console.warn("Auth is not initialized or not in browser");
    const { subscribe } = writable(null);
    return {
      subscribe,
    };
  }
  const { subscribe } = writable(auth.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });

    return () => unsubscribe();
  });
  return {
    subscribe,
  };
}

export const user = authStore();