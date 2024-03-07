import mysql from "mysql2/promise";

let mysqlconn = null;

export function mysqlconnFn() {
  if (!mysqlconn) {
    mysqlconn = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "db",
    });
  }

  return mysqlconn;
}
