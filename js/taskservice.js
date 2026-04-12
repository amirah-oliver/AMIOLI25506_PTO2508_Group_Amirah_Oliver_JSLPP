/**
 * taskService.js
 * Manages task state
 */

import { saveTasks, loadTasks } from "./storage.js";
import { initialTasks } from "../initialdata.js";

let tasks = [];

/**
 * Initialize tasks
 */
export function initTasks() {
  const stored = loadTasks();

  tasks = stored || initialTasks;

  saveTasks(tasks);
}

/**
 * Get all tasks
 */
export function getTasks() {
  return tasks;
}

/**
 * Add new task
 */
export function addTask(task) {
  task.id = Date.now();
  tasks.push(task);
  saveTasks(tasks);
}

/**
 * Update existing task
 */
export function updateTask(updatedTask) {
  tasks = tasks.map(t =>
    t.id === updatedTask.id ? updatedTask : t
  );

  saveTasks(tasks);
}

/**
 * Delete task
 */
export function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveTasks(tasks);
}