const form = document.querySelector('#my-form');

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#number');

const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Adding existing data from local Storage
retrieveFromCrudCrud();

/*
* --- Event Listeners ---
*/

// Submit Event
form.addEventListener('submit', onSubmit);

// Delete Item Event
userList.addEventListener('click', deleteItem);

// Edit Item Event
userList.addEventListener('click', editItem);


function onSubmit(e) {

    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '' || phoneInput.value === '') {

        errorMsgEmptyField();
    
    }else {

        // Storing to local Storage and creating new Node
        storeToCrudCrud();

        // Clearing the fields
        clearFields();
    }

}


/*
* --- Stroring and Retrieving Data
*/

function clearFields() {
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
}

function storeToCrudCrud() {

    // Making the user object
    let userDetails = {
        name : nameInput.value,
        email : emailInput.value,
        phone: phoneInput.value
    }
    
    // Sending Data to crud crud
    axios
        .post('https://crudcrud.com/api/77de93130079481689886b22ceb49301/AppointmentData', 
        userDetails)
        .then((response) => {
            console.log(response.data._id)
            createNode(response.data);
        })
        .catch((err) => {
            
        })
}

function errorMsgEmptyField() {
    msg.classList.add('error');

    msg.innerHTML = 'Please Enter All The Fields';

    // Removing Error Message
    setTimeout(() => msg.remove(), 3000);
}

function retrieveFromCrudCrud() {
    
    axios
        .get('https://crudcrud.com/api/77de93130079481689886b22ceb49301/AppointmentData')
        .then((response) => {
            
            response.data.forEach((data) => {
                createNode(data);
            })
        })
        .catch(err => {
            console.log(err);
        })
}

/*
* --- Create Functions ---
*/

function createNode(data) {
    const li = document.createElement('li');

    li.id = data._id;

    // Creating edit and delete buttons
    var editButton = createEditButton();
    var deleteButton = createDeleteButton();

    // Creating Node with user details
    li.appendChild(document.createTextNode(
        `• ${data.name} : ${data.email} : ${data.phone}`
    ));
    
    li.appendChild(deleteButton);
    li.appendChild(editButton);

    // Appending to ul
    userList.appendChild(li);
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

    return editButton;
}

/*
* --- Edit, Delete functions ---
*/

function deleteItem(e) {
    e.preventDefault();

    if(e.target.classList.contains('delete')) {
        let li = e.target.parentElement;
        let url = 'https://crudcrud.com/api/77de93130079481689886b22ceb49301/AppointmentData/' + li.id;

        userList.removeChild(li);

        axios
            .delete(url)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            })
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
        phoneInput.value = userDetailsDeSerialized.phone;

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
