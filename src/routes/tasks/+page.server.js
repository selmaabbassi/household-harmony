import {
  createTask,
  deleteTask,
  getTasks,
  completeTask,
  editTask,
} from "$lib/server/firebase";

export async function load() {
  return getTasks();
}

export const actions = {
  create: async ({ request }) => {
    console.log("create task");
    const data = await request.formData();

    const task = {
      title: data.get("task-title"),
      difficulty: data.get("task-difficulty"),
      completed: false,
    };

    createTask(task);
  },
};
