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
