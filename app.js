const form = document.querySelector("#todo");
const input = document.querySelector("#task");
const taskList = document.querySelector("#taskList");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const newTaskListing = document.createElement("li");
  const removeBtn = document.createElement("button");
  const taskInput = input.value;

  container.style.display = "block";
  removeBtn.innerHTML = "&#10008;";
  removeBtn.classList.add("close");
  removeBtn.setAttribute("title", "Delete");

  newTaskListing.innerHTML = taskInput[0].toUpperCase() + taskInput.slice(1);
  newTaskListing.setAttribute("title", "Click me if completed");

  newTaskListing.appendChild(removeBtn);
  taskList.appendChild(newTaskListing);

  input.value = "";
});

taskList.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
    if (taskList.hasChildNodes() === false) {
      container.style.display = "none";
    }
  } else if (e.target.tagName === "LI") {
    e.target.classList.toggle("completed");
    if (e.target.classList.contains("completed")) {
      taskList.appendChild(e.target);
    } else {
      taskList.prepend(e.target);
    }
  }
});
