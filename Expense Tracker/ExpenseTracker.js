// Main Form
const mainForm = document.getElementById('Main-Form');

// Three input fields
const expenseAmount = document.getElementById('Expense-Amount-Input');
const description = document.getElementById('Description-Input');
const category = document.getElementById('Category-Input');

// Main Display List
const mainList = document.getElementById('Main-List');

/* 
* ------ Event Listeners ------
*/

mainForm.addEventListener('submit', onSubmit);

window.addEventListener('DOMContentLoaded', retrieveFromLocalStorage);

/* 
* ------ Event Functions ------
*/


function onSubmit(e) {

    e.preventDefault();

    if(expenseAmount.value === '' || description.value === '' || category.value === '') {

        window.alert('Please Enter all the fields');

    } else {

        // Storing to local Storage and creating new list
        storeToLocalStorage();

        // Clearing the fields
        clearFields();
    }
}

function editItem(e) {

    e.preventDefault()

    // Accessing the list
    let li = e.target.parentElement;

    // Converting object back into string
    expenseDetailsDeserialized = JSON.parse(localStorage.getItem(li.id));

    // Changing input values to the list values
    expenseAmount.value = expenseDetailsDeserialized.expenseAmount;
    description.value = expenseDetailsDeserialized.description;
    category.value = expenseDetailsDeserialized.category;

    // Removing the list
    mainList.removeChild(li);
    localStorage.removeItem(li.id);
}

function deleteItem(e) {

    e.preventDefault();

    // Accessing the list
    let li = e.target.parentElement;

    // Removing from local Storage
    localStorage.removeItem(li.id);

    // Removing from screen
    mainList.removeChild(li);
}


/* 
* ------ Other Functions ------
*/


function storeToLocalStorage() {

    // Storing expense details in an object so as to store in local storage
    let expenseDetails = {
        expenseAmount: expenseAmount.value,
        description: description.value,
        category: category.value
    }

    // Making the expense key
    let expenseKey = description.value;
    
    // Converting object to string
    expenseDetailsSerialized = JSON.stringify(expenseDetails);

    // Storing to local storage
    localStorage.setItem(expenseKey, expenseDetailsSerialized);

    // creating the list on screen
    createList(expenseKey);
}

function clearFields() {

    expenseAmount.value = '';
    description.value = '';
}

function retrieveFromLocalStorage() {
    
    // Iterating over the local storage and creating lists
    for(let i = 0; i < localStorage.length; i++) {
        createList(localStorage.key(i));
    }
}

/* 
* ------ Create Functions ------
*/


function createList(expenseKey) {

    // Creating an empty li
    let li = document.createElement('li');

    // Converting string back into object
    expenseDetailsDeserialized = JSON.parse(localStorage.getItem(expenseKey));

    // Creating edit and delete buttons;
    let editButton = createEditButton();
    let deleteButton = createDeleteButton();

    // Assinging the description as id for list
    li.id = expenseKey;

    // Adding text to the list
    li.append(document.createTextNode(
        `${expenseDetailsDeserialized.expenseAmount} - ${expenseDetailsDeserialized.description} - ${expenseDetailsDeserialized.category}`
    ));
    
    // Adding edit and delete buttons to the list
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    
    // Adding the list to the main list
    mainList.appendChild(li);
}

function createEditButton() {

    // Creating the button
    let editButton = document.createElement('button');

    // Adding Class Name
    editButton.className = 'Edit-Button';

    // Adding Text
    editButton.append(document.createTextNode('Edit Expense'));

    // Adding event listener
    editButton.onclick = editItem;

    return editButton;
}

function createDeleteButton() {

    // Creating the button
    let deleteButton = document.createElement('button');

    // Adding class to the button
    deleteButton.className = 'Delete-Button';

    // Adding Text to the button
    deleteButton.append(document.createTextNode('Delete Expense'));

    // Adding event listener
    deleteButton.onclick = deleteItem;

    return deleteButton;
}

