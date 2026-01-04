const makeGreen = document.getElementById("make-green");
const makeBlue = document.getElementById("make-blue");
const makeRed = document.getElementById("make-red");

makeGreen.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});

makeRed.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});

makeBlue.addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
});
