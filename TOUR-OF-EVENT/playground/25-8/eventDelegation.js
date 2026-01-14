document
  .querySelector("#shopping-list")
  .addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      e.target.remove();
    }
  });

document.querySelector(".btn-add-item").addEventListener("click", function () {
  const ol = document.querySelector("#shopping-list");
  const li = document.createElement("li");
  li.classList.add("item");
  li.innerText = "New static fruit added";
  ol.appendChild(li);
});
