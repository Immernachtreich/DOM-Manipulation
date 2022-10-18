const form = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Adding existing data from local Storage
retrieveFromLocalStorage();

// Submit Event
form.addEventListener('submit', onSubmit);

// Delete Item Event
userList.addEventListener('click', deleteItem);

// Edit Item Event
userList.addEventListener('click', editItem);
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

    li.id = userKey;

    // Creating edit and delete buttons
    var editButton = createEditButton();
    var deleteButton = createDeleteButton();

    // Getting user Details from Local Storage
    let userDetailsDeSerialized = JSON.parse(localStorage.getItem(userKey));

    // Creating Node with user details
    li.appendChild(document.createTextNode(
        `• ${userDetailsDeSerialized.name} : ${userDetailsDeSerialized.email}`
    ));
    
    li.appendChild(deleteButton);
    li.appendChild(editButton);

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
    let userKey = emailInput.value;
    
    //If email already exists, we replace the user
    if(localStorage.getItem(userKey) !== null) {
        removeUserFromScreen(userDetails.email);
        localStorage.removeItem(userKey);
    }
    // if(localStorage.getItem(userKey) !== null) {
    //     errorMsgInvalidEmail();
    //     return;
    // }
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

// function errorMsgInvalidEmail() {
//     msg.classList.add('error');

//     msg.innerHTML = 'Email already taken';

//     // Removing Error Message
//     setTimeout(() => msg.remove(), 3000);
// }

function retrieveFromLocalStorage() {
    
    for(let i = 0; i < localStorage.length; i++) {
        createNode(localStorage.key(i));
    }
}

function createDeleteButton() {
    // Delete button
    var deleteButton = document.createElement('button');

    // Adding Classes to Delete Button
    deleteButton.className = 'delete';

    // Adding X to the button
    deleteButton.appendChild(document.createTextNode('X'));

    return deleteButton;
}

function createEditButton() {
    // Edit Button
    var editButton = document.createElement('button');

    // Adding Class to Edit Button
    editButton.className = 'EditButton';

    //Adding Edit text to the button
    editButton.appendChild(document.createTextNode("Edit"));

    // Adding CSS Styling
    editButton.style.float = 'right';
    editButton.style.marginRight = '15px';
    editButton.style.backgroundColor = '#f0e24f';
    editButton.style.borderColor = '#f0e24f';
    editButton.style.borderRadius = '7px';

    return editButton;
}

function deleteItem(e) {
    e.preventDefault();

    if(e.target.classList.contains('delete')) {
        let li = e.target.parentElement;
        userList.removeChild(li);
        localStorage.removeItem(li.id);
    }
}

function editItem(e) {
    e.preventDefault()

    if(e.target.classList.contains('EditButton')) {

        let li = e.target.parentElement;

        userDetailsDeSerialized = JSON.parse(localStorage.getItem(li.id));

        // Chaning input values to the userDetails
        nameInput.value = userDetailsDeSerialized.name;
        emailInput.value = userDetailsDeSerialized.email;

        // Deleting the item
        userList.removeChild(li);
    }
}
function removeUserFromScreen(email) {
    var li = document.getElementById(email);
    if(li !== null) {
        userList.removeChild(li);
    }
}
