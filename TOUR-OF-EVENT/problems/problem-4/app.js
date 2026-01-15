document.querySelector('#sports').addEventListener('click', function (e) {
    const target = e.target;
    console.log(target.innerText + ' is clicked');

    if (target.matches('li')) {
        target.style.backgroundColor = 'purple';
        target.style.color = '#fff'
    }
})

const sports = document.querySelector('#sports');
const newElement = document.createElement('li');

newElement.innerText = 'Rugby';
newElement.setAttribute('id', 'Rugby');

sports.appendChild(newElement);