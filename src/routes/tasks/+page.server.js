import { createTask, deleteTask, getTasks } from "$lib/server/firebase";

export async function load() {
  return getTasks();
}

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();
  
    const task = {
      title: data.get("task-title"),
      difficulty: data.get("task-difficulty")
    }

    createTask(task);
  },

  delete: async ({ request }) => {
    const data = await request.formData();
    const taskId = data.get("id");

    deleteTask(taskId);
  }
};
