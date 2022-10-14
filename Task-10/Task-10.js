const form = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {

    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {

        msg.classList.add('error');

        msg.innerHTML = 'Please Enter All The Fields';

        // Removing Error Message
        setTimeout(() => msg.remove(), 3000);

    }else {
        
        // Creating Node
        createNode();

        // Storing to local Storage
        localStorage.setItem('Name', nameInput.value);
        localStorage.setItem('Email', emailInput.value);

        // Clearing the fields
        nameInput.value = '';
        emailInput.value = '';
    }

}

function createNode() {
    const li = document.createElement('li');

        li.appendChild(document.createTextNode(
            `${nameInput.value} : ${emailInput.value}`
        ));
        userList.appendChild(li);
}
