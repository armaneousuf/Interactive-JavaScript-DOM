const sections = document.querySelectorAll("section");
// console.log(sections);
for (const section of sections) {
  // console.log(section.innerText);
  section.style.background = "lightblue";
  section.style.padding = "10px";
  section.style.border = "2px solid blue";
}

const headings = document.querySelectorAll('h2');
for (const heading of headings) {
    // console.log(heading.innerText);
    heading.classList.add('bottom-border');
}

const listItems = document.querySelectorAll("section ul li");
for (const item of listItems) {
  // console.log(item.innerText);

  item.style.listStyle = "none";
}
