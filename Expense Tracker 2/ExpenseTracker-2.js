// Main Form
const mainForm = document.getElementById('Main-Form');

// Three input fields
const expenseAmount = document.getElementById('Expense-Amount-Input');
const description = document.getElementById('Description-Input');
const category = document.getElementById('Category-Input');

// Main Display List
const mainList = document.getElementById('Main-List');

// Edit true or false var
let edit = [false, ''];

/* 
* ------ Event Listeners ------
*/

window.addEventListener('DOMContentLoaded', retrieveFromCrudCrud);

mainForm.addEventListener('submit', onSubmit);


/* 
* ------ Event Functions ------
*/


function onSubmit(e) {

    e.preventDefault();

    if(expenseAmount.value === '' || description.value === '' || category.value === '') {

        window.alert('Please Enter all the fields');

    } else if(edit[0]){

        // Editing the existing details
        editToCrudCrud(edit[1]);

        // Clearing the fields
        clearFields();

    } else {
        
        // Storing to local Storage and creating new list
        storeToCrudCrud();

        // Clearing the fields
        clearFields();
    }
}

function editItem(e) {

    e.preventDefault()


    // Accessing the list
    let li = e.target.parentElement;
    let url = 'https://crudcrud.com/api/ff2dca0f113247c38d275126fb0e5d98/ExpenseTracker/' + li.id;

    axios
        .get(url)
        .then((response) => {

            // Changing input values to the list values
            expenseAmount.value = response.data.expenseAmount;
            description.value = response.data.description;
            category.value = response.data.category;

            // Removing the list
            mainList.removeChild(li);

            // Changing edit variable
            edit = [true, url];
        })
        .catch((err) => {
            console.log(err);
        })
}

function deleteItem(e) {

    e.preventDefault();

    // Accessing the list
    let li = e.target.parentElement;

    let url = 'https://crudcrud.com/api/ff2dca0f113247c38d275126fb0e5d98/ExpenseTracker/' + li.id;

    axios
        .delete(url)
        .then((response) => {
            // Removing From screen
            mainList.removeChild(li);
        })
        .catch((err) => {
            console.log(err);
        })
}


/* 
* ------ Storing, Editing and Retrieving Functions ------
*/


async function storeToCrudCrud() {

    // Storing expense details in an object
    let expenseDetails = {
        expenseAmount: expenseAmount.value,
        description: description.value,
        category: category.value
    }

    // Storing to crud crud
    try{

        let response = 
            await axios.post('https://crudcrud.com/api/ff2dca0f113247c38d275126fb0e5d98/ExpenseTracker',expenseDetails);

        createList(response.data);
        
    } catch(err) {
        console.log(err);
    }
}

async function retrieveFromCrudCrud() {

    try {

        let response = await axios.get('https://crudcrud.com/api/ff2dca0f113247c38d275126fb0e5d98/ExpenseTracker');

        response.data.forEach((data) => {
            createList(data);
        })
        
    } catch(err) {
        console.log(err);
    }
}

async function editToCrudCrud(url) {
    
    // Making the new Object
    let expenseDetails = {
        expenseAmount: expenseAmount.value,
        description: description.value,
        category: category.value
    }

    // Making edit false for next user
    edit = [false, ''];

    try{
        await axios.put(url, expenseDetails);

        let response = await axios.get(url);
        createList(response.data);

    } catch(err) {
        console.log(err);
    }
    
}

/* 
* ------ Create Functions ------
*/


function createList(data) {

    // Creating an empty li
    let li = document.createElement('li');

    // Creating edit and delete buttons;
    let editButton = createEditButton();
    let deleteButton = createDeleteButton();

    // Assinging the description as id for list
    li.id = data._id;

    // Adding text to the list
    li.append(document.createTextNode(
        `${data.expenseAmount} - ${data.description} - ${data.category}`
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
    
    // Adding event listener 
    editButton.onclick = editItem;
    // Adding Text
    editButton.append(document.createTextNode('Edit Expense'));

    return editButton;
}

function createDeleteButton() {

    // Creating the button
    let deleteButton = document.createElement('button');

    // Adding class to the button
    deleteButton.className = 'Delete-Button';

    // Adding event listener
    deleteButton.onclick = deleteItem;

    // Adding Text to the button
    deleteButton.append(document.createTextNode('Delete Expense'));

    return deleteButton;
}

/*
* --- Other Functions ---
*/
function clearFields() {

    expenseAmount.value = '';
    description.value = '';
}
