import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export async function createUser(user) {
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
