const form = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {

    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {

        errorMsg();
    
    }else {
        
        // Creating Node
        createNode();

        // Storing to local Storage
        storeToLocalStorage();

        // Clearing the fields
        clearFields();
    }

}

function createNode() {
    const li = document.createElement('li');

        li.appendChild(document.createTextNode(
            `${nameInput.value} : ${emailInput.value}`
        ));
        userList.appendChild(li);
}

function clearFields() {
    nameInput.value = '';
    emailInput.value = '';
}

function storeToLocalStorage() {
    localStorage.setItem('Name', nameInput.value);
    localStorage.setItem('Email', emailInput.value);
}

function errorMsg() {
    msg.classList.add('error');

    msg.innerHTML = 'Please Enter All The Fields';

    // Removing Error Message
    setTimeout(() => msg.remove(), 3000);
}
