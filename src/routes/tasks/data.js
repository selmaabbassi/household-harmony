export const db = new Map();

export function getTasks() {
  return Array.from(db.values());
}

export function createTask(title, difficulty) {
  const taskId = db.size + 1;
  db.set(taskId, {
    id: taskId,
    title: title,
    difficulty: difficulty,
  });
  const task = db.get(1);
}

export function deleteTask(id) {
  db.delete(id);
}
