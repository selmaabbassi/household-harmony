import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.config";

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
