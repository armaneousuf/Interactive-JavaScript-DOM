const listItems = document.getElementsByTagName("li");

for (const item of listItems) {
  console.log(item.textContent);
  item.style.listStyle = "none";
}

const heading = document.querySelector(".first-h1");
heading.style.background = "rebeccapurple";
heading.style.padding = "15px";
heading.style.fontSize = "2.5rem";
