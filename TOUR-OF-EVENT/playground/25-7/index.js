document.querySelector("#item-2").addEventListener("click", function (e) {
  console.log("propagation stop");
  e.stopPropagation();
});
document.querySelector("#item-4").addEventListener("click", function () {
  console.log("Item 4 clicked");
});
document.querySelector("#item-3 strong").addEventListener("click", function () {
  console.log("strong text clicked");
});
document.querySelector("section").addEventListener("click", function () {
  console.log("section clicked");
});
document.querySelector("ul").addEventListener("click", function () {
  console.log("ul clicked");
});
document.querySelector("body").addEventListener("click", function () {
  console.log("body clicked");
});
document.querySelector("ul").addEventListener("click", function (event) {
  console.log("li clicked", event.target.closest("li"));
  console.log("li type:", event.type);
});
