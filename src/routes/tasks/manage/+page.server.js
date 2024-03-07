import * as db from "../data.js";

export function load() {
  return {
    tasks: db.getTasks(),
  };
}
