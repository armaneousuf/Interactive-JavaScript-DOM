const commentsBtn = document.querySelector('.comment-btn');
const parentContainer = document.querySelector('.comments');
const commentInput = document.querySelector(".comment-input");

commentsBtn.addEventListener('click', function () {
    const commentValue = commentInput.value; 
    const newElement = document.createElement('p');

    newElement.innerText = commentValue;
    
    parentContainer.appendChild(newElement);

    commentInput.value = '';

})

