const text = document.querySelector(".updated-btn");
const newH1 = document.querySelector(".old-h1");
const btnUpdate = document.querySelector('.update-btn');
const nameInput = document.querySelector('.input-name');
const nameP = document.querySelector('.name');

text.addEventListener("click", function () {
  newH1.innerText = "This is a new Heading";
});


btnUpdate.addEventListener('click', function () {
    nameP.innerText = nameInput.value;
})