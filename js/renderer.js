/**
 * renderer.js
 * Responsible for rendering tasks to UI
 */

import { getTasks } from "./taskService.js";
import { openEditModal } from "./modal.js";

/**
 * Render all tasks into columns
 */
export function renderTasks() {

  document.querySelectorAll(".column")
    .forEach(col => col.querySelectorAll(".task").forEach(t => t.remove()));

  const tasks = getTasks();

  tasks.forEach(task => {

    const taskEl = document.createElement("div");
    taskEl.className = "task";

    taskEl.innerHTML = `
      <h4>${task.title}</h4>
      <p>${task.description}</p>
    `;

    taskEl.addEventListener("click", () =>
      openEditModal(task)
    );

    document
      .querySelector(`.column[data-status="${task.status}"]`)
      .appendChild(taskEl);
  });

  updateCounts();
}

/**
 * Update column counters
 */
export function updateCounts() {
  document.querySelectorAll(".column").forEach(column => {
    const count = column.querySelectorAll(".task").length;
    column.querySelector(".count").innerText = count;
  });
}