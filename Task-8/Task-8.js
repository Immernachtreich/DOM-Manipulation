var form = document.getElementById('addForm');
var itemsList = document.getElementById('items');

// Form Submit Event
form.addEventListener('submit', addItem);

// Delete Item Event
itemsList.addEventListener('click', removeItem);

// Add Item Function
function addItem(e) {
    e.preventDefault();

    // Getting Input value
    var newItem = document.getElementById('item');

    // Creating a New List
    var li = document.createElement('li');
    li.className = 'list-group-item';
    
    //Creating Delete and Edit Button
    var deleteButton = createDeleteButton();
    var editButton = createEditButton();

    // Adding input text to list
    li.appendChild(document.createTextNode(newItem.value));

    // Adding buttons to our List
    li.appendChild(deleteButton);
    li.appendChild(editButton);

    // Appending newly created list to our item list
    itemsList.appendChild(li);
}

// Remove Item Function
function removeItem(e) {
    e.preventDefault();

    if(e.target.classList.contains('delete')) {
            var li = e.target.parentElement;
            itemsList.removeChild(li);
    }
}

// Delete Button Function
function createDeleteButton() {
    // Delete button
    var deleteButton = document.createElement('button');

    // Adding Classes to Delete Button
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';

    // Adding X to the button
    deleteButton.appendChild(document.createTextNode('X'));

    return deleteButton;
}

// Edit Button Function
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