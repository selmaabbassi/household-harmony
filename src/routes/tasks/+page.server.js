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



export const actions = {
  create: async ({ request }) => {
    let mysqlconn = await mysqlconnFn();
    const data = await request.formData();
  
    const taskTitle = data.get("task-title");
    const difficulty = data.get("task-difficulty");
  
    try {
      let results = await mysqlconn
      .query('INSERT INTO db.tasks (title, difficulty) VALUES (?, ?)', [taskTitle, difficulty]);
  
    } catch(error) {
      console.log("Error");
      console.log(error);
    }
  },

  delete: async ({ request }) => {
    console.log("delete")
    let mysqlconn = await mysqlconnFn();
    const data = await request.formData();
    const taskId = data.get("id");
    console.log(taskId);

    try {
      let results = await mysqlconn
      .query('DELETE from tasks WHERE tasks.id = (?)', [taskId])
    } catch(error){

    }
  }
};
