document.querySelector('#sports').addEventListener('click', function (e) {
    const target = e.target;
    if (target.matches('li')) {
        target.style.backgroundColor = 'purple';
        target.style.color = '#fff'
    }
})