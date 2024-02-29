import { tasks } from "../data.js";

export function load() {
  return {
    allTasks: tasks.map((task) => ({
      title: task.title,
      difficulty: task.difficulty,
    })),
  };
}
