const mainInput = document.querySelector("#main-input");
mainInput.addEventListener("keyup", function (event) {
  const text = event.target.value;
  const deleteBtn = document.querySelector(".delete-btn");
  if (text === "Delete") {
    deleteBtn.removeAttribute("disabled");
  } else {
    deleteBtn.setAttribute("disabled", true);
  }
});

const deleteElement = document.querySelector(".delete-btn");
deleteElement.addEventListener("click", function () {
  const removableElement = document.querySelector(".heading");
  removableElement.style.display = "none";
  mainInput.value = "";
});
