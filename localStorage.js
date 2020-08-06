const container = document.querySelector("#listing");

document.addEventListener("DOMContentLoaded", function () {
  taskList.innerHTML = localStorage.getItem("todoList");
  if (taskList.hasChildNodes() === true) {
    container.style.display = "block";
  } else {
    container.style.display = "none";
  }
});

document.addEventListener("click", function () {
  localStorage.setItem("todoList", taskList.innerHTML);
});

document.addEventListener("submit", function () {
  localStorage.setItem("todoList", taskList.innerHTML);
});
