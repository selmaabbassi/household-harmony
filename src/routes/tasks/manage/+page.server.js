import { createTask, deleteTask, getTasks, completeTask, editTask } from "$lib/server/firebase";

export async function load() {
  return getTasks();
}

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();

    const task = {
      title: data.get("task-title"),
      difficulty: data.get("task-difficulty"),
      completed: false,
    }

    createTask(task);
  },

  delete: async ({ request }) => {
    const data = await request.formData();
    const taskId = data.get("id");

    deleteTask(taskId);
  },

  edit: async ({ request }) => {
    const data = await request.formData();
    console.log("edit");

    const task = {
      id: data.get("id"),
      title: data.get("task-title"),
      difficulty: data.get("task-difficulty")

    }
    editTask(task);
  },

  complete: async ({ request }) => {
    console.log("complete")
    const data = await request.formData();
    const taskId = data.get("id");

    completeTask(taskId);
  },
};
