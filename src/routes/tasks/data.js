export const db = new Map();

export function getTasks() {
  return Array.from(db.values());
}

export function createTask(title, difficulty) {
  const taskId = crypto.randomUUID();
  db.set(taskId, {
    id: taskId,
    title: title,
    difficulty: difficulty,
  });
}

export function deleteTask(id) {
  db.delete(id);
}
