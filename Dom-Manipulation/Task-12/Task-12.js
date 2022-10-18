const form = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {

    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {

        errorMsgEmptyField();
    
    }else {

        // Storing to local Storage and creating new Node
        storeToLocalStorage();

        // Clearing the fields
        clearFields();
    }

}

function createNode(userKey) {
    const li = document.createElement('li');

    // Getting user Details from Local Storage
    let userDetailsDeSerialized = JSON.parse(localStorage.getItem(userKey));

    // Creating Node with user details
    li.appendChild(document.createTextNode(
        `• ${userDetailsDeSerialized.name} : ${userDetailsDeSerialized.email}`
    ));
    
    // Appending to ul
    userList.appendChild(li);
}

function clearFields() {
    nameInput.value = '';
    emailInput.value = '';
}

function storeToLocalStorage() {

    let userDetails = {
        name : nameInput.value,
        email : emailInput.value
    }

    // Making a String with UserEmail appended at the end
    let userKey = 'UserDetails' + emailInput.value;
    
    if(localStorage.getItem(userKey) !== null) {
        errorMsgInvalidEmail();
        return;
    }
    userDetailsSerialized = JSON.stringify(userDetails);

    localStorage.setItem(userKey, userDetailsSerialized);

    createNode(userKey);

}

function errorMsgEmptyField() {
    msg.classList.add('error');

    msg.innerHTML = 'Please Enter All The Fields';

    // Removing Error Message
    setTimeout(() => msg.remove(), 3000);
}

function errorMsgInvalidEmail() {
    msg.classList.add('error');

    msg.innerHTML = 'Email already taken';

    // Removing Error Message
    setTimeout(() => msg.remove(), 3000);
}
