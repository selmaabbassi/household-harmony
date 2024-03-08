import mysql from "mysql2/promise";
import { PASSWORD, USER } from "./secrets";

let mysqlconn = null;

export function mysqlconnFn() {
  if (!mysqlconn) {
    mysqlconn = mysql.createConnection({
      host: "localhost",
      user: USER,
      password: PASSWORD,
      database: "db",
    });
  }

  return mysqlconn;
}

export async function getTasks() {
   try {
    let results = await mysqlconnFn()
      .query("SELECT id, title, difficulty FROM db.tasks;")
      .then(function ([rows, fields]) {
        // console.log(rows);
        return rows;
      });

    return {
      tasks: Array.from(results),
    };
  } catch (error) {
    console.error("Could not retreive tasks from db");
    return error;
  }
}

export async function createTask(task) {
  try {
    let results = await mysqlconnFn()
    .query('INSERT INTO db.tasks (title, difficulty) VALUES (?, ?)', [task.task, task.difficulty]);

  } catch(error) {
    console.error("Could not insert task to db: {}", task);
    return error;
  }
}

export async function deleteTask(taskId) {
  try {
    let results = await mysqlconnFn()
    .query('DELETE from tasks WHERE tasks.id = (?)', [taskId])
  } catch(error){
    console.error("Could not delete task with id {} to db", taskId);
    return error;
  }
}
