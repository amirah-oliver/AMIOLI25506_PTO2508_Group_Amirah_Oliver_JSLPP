/* =========================
MODAL ELEMENTS
========================= */

const addBtn = document.querySelector(".add-btn");
const modal = document.getElementById("taskModal");
const closeBtn = document.querySelector(".close-btn");
const saveBtn = document.getElementById("saveTask");
const deleteBtn = document.getElementById("deleteTask");

let editTask = null;

/* =========================
OPEN MODAL (ADD TASK)
========================= */

addBtn.addEventListener("click", () => {

modal.style.display = "flex";

document.getElementById("modalTitle").innerText = "Add New Task";

deleteBtn.style.display = "none";

editTask = null;

document.getElementById("taskTitle").value = "";
document.getElementById("taskDesc").value = "";
document.getElementById("taskStatus").value = "todo";

});

/* =========================
CLOSE MODAL
========================= */

closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
if (e.target == modal) modal.style.display = "none";
};

/* =========================
UPDATE COLUMN COUNTS
========================= */

function updateCounts() {

document.querySelectorAll(".column").forEach(column => {

```
const count = column.querySelectorAll(".task").length;

column.querySelector(".count").innerText = count;
```

});

}

/* =========================
SAVE TASK
========================= */

saveBtn.onclick = () => {

const title = document.getElementById("taskTitle").value.trim();
const desc = document.getElementById("taskDesc").value.trim();
const status = document.getElementById("taskStatus").value;

if (!title) {

```
alert("Title is required");
return;
```

}

if (editTask) {

```
editTask.querySelector("h4").innerText = title;
editTask.querySelector("p").innerText = desc;

document
  .querySelector(`.column[data-status='${status}']`)
  .appendChild(editTask);
```

}

else {

```
const task = document.createElement("div");

task.classList.add("task");

task.innerHTML = `
  <h4>${title}</h4>
  <p>${desc}</p>
`;

task.onclick = () => openEditModal(task);

document
  .querySelector(`.column[data-status='${status}']`)
  .appendChild(task);
```

}

modal.style.display = "none";

updateCounts();

};

/* =========================
EDIT TASK
========================= */

function openEditModal(task) {

modal.style.display = "flex";

document.getElementById("modalTitle").innerText = "Edit Task";

deleteBtn.style.display = "inline-block";

editTask = task;

document.getElementById("taskTitle").value =
task.querySelector("h4").innerText;

document.getElementById("taskDesc").value =
task.querySelector("p").innerText;

const column = task.parentElement.getAttribute("data-status");

document.getElementById("taskStatus").value = column;

}

/* =========================
DELETE TASK
========================= */

deleteBtn.onclick = () => {

if (editTask) {

```
editTask.remove();

modal.style.display = "none";

updateCounts();
```

}

};

/* =========================
DARK MODE TOGGLE
========================= */

const themeToggle = document.getElementById("themeToggle"); 

themeToggle.addEventListener("change", () => {

document.body.classList.toggle("dark-mode");

});

/* =========================
SIDEBAR TOGGLE
========================= */

const hideSidebarBtn = document.getElementById("hideSidebar"); 
const showSidebarBtn = document.getElementById("showSidebar");

hideSidebarBtn.addEventListener("click", () => {

document.body.classList.add("sidebar-hidden");

});

showSidebarBtn.addEventListener("click", () => {

document.body.classList.remove("sidebar-hidden");

});

/* =========================
INITIAL TASK CLICK EVENTS
========================= */

document.querySelectorAll(".task").forEach(task => {

task.addEventListener("click", () => openEditModal(task));

});

/* =========================
INITIALIZE COUNTS
========================= */

updateCounts();