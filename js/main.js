/**
 * main.js
 * Application bootstrap
 */

import { initTasks } from "./taskService.js";
import { renderTasks } from "./renderer.js";
import { openAddModal, closeModal } from "./modal.js";

const addBtn = document.querySelector(".add-btn");
const closeBtn = document.querySelector(".close-btn");
const themeToggle = document.getElementById("themeToggle");
const hideSidebarBtn = document.getElementById("hideSidebar");
const showSidebarBtn = document.getElementById("showSidebar");

/* INIT APP */
initTasks();
renderTasks();

/* ADD TASK */
addBtn.addEventListener("click", openAddModal);

/* CLOSE MODAL */
closeBtn.addEventListener("click", closeModal);

window.onclick = e => {
  if (e.target.id === "taskModal") closeModal();
};

/* DARK MODE */
themeToggle.addEventListener("change", () =>
  document.body.classList.toggle("dark-mode")
);

/* SIDEBAR */
hideSidebarBtn.onclick = () =>
  document.body.classList.add("sidebar-hidden");

showSidebarBtn.onclick = () =>
  document.body.classList.remove("sidebar-hidden");