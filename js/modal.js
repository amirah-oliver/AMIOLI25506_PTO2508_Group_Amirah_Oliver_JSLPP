/**
 * modal.js
 * Handles modal interactions
 */

import { addTask, updateTask, deleteTask } from "./taskService.js";
import { renderTasks } from "./renderer.js";

const modal = document.getElementById("taskModal");
const saveBtn = document.getElementById("saveTask");
const deleteBtn = document.getElementById("deleteTask");

let editingTask = null;

/**
 * Open add modal
 */
export function openAddModal() {
  modal.style.display = "flex";

  editingTask = null;

  deleteBtn.style.display = "none";

  taskTitle.value = "";
  taskDesc.value = "";
  taskStatus.value = "todo";
}

/**
 * Open edit modal
 */
export function openEditModal(task) {

  modal.style.display = "flex";

  editingTask = task;

  deleteBtn.style.display = "inline-block";

  taskTitle.value = task.title;
  taskDesc.value = task.description;
  taskStatus.value = task.status;
}

/**
 * Close modal
 */
export function closeModal() {
  modal.style.display = "none";
}

/* SAVE TASK */
saveBtn.onclick = () => {

  const task = {
    id: editingTask?.id,
    title: taskTitle.value.trim(),
    description: taskDesc.value.trim(),
    status: taskStatus.value
  };

  if (!task.title) return alert("Title required");

  editingTask ? updateTask(task) : addTask(task);

  closeModal();
  renderTasks();
};

/* DELETE */
deleteBtn.onclick = () => {
  deleteTask(editingTask.id);
  closeModal();
  renderTasks();
};