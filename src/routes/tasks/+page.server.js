import { mysqlconnFn } from "$lib/server/mysql";

export async function load() {
  let mysqlconn = await mysqlconnFn();
  try {
    let results = await mysqlconn
      .query("SELECT id, title, difficulty FROM db.tasks;")
      .then(function ([rows, fields]) {
        // console.log(rows);
        return rows;
      });

    return {
      tasks: Array.from(results),
    };
  } catch (error) {
    console.error("Got an error!!!");
    console.log(error);
    return error;
  }
}
/* 
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
 */
