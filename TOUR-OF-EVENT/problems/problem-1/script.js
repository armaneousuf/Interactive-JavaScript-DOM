document.querySelector(".add-btn").addEventListener("click", function () {
  const inputField = document.querySelector(".input-field");
  // console.log(inputField.value);

  const newTaskContainer = document.createElement("div");

  const div = document.querySelector(".tasks");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const taskSpan = document.createElement("span");
  taskSpan.textContent = inputField.value;

  newTaskContainer.appendChild(checkbox);
  newTaskContainer.appendChild(taskSpan);
  div.appendChild(newTaskContainer);

  inputField.value = "";
});
