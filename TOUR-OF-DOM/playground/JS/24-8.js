// Parent Node
const mainContainer = document.getElementById('main-container');
// console.log(mainContainer);

// New child
// const newSection = document.createElement('section');
// const h1 = document.createElement('h1');
// h1.innerText = 'Languages I want to learn';
// newSection.appendChild(h1);

// Appand child
// mainContainer.appendChild(newSection);


const favLanguage = document.createElement('section');
favLanguage.innerHTML = `
<h1>Language I want to learn</h1>
<ul>
<li>Lua</li>
<li>Go</li>
<li>Rust</li>
</ul>
`
mainContainer.appendChild(favLanguage);