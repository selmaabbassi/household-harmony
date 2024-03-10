import {
  createTask,
  deleteTask,
  getTasks,
  createUser,
} from "$lib/server/firebase";

export const actions = {
  create: async ({ request }) => {
    console.log("creating account");
    const data = await request.formData();

    const user = {
      email: data.get("email"),
      password: data.get("password"),
    };

    createUser(user);
  },
};
