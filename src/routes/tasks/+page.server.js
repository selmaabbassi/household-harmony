import * as db from "./data.js";

export function load() {
  return {
    tasks: db.getTasks(),
  };
}

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    db.createTask(data.get("task-title"), data.get("task-difficulty"));
  },

  delete: async ({ request }) => {
    const data = await request.formData();
    db.deleteTask(data.get("id"));
  },
};
