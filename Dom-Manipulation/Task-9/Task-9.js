var form = document.getElementById('addForm');
var itemsList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form Submit Event
form.addEventListener('submit', addItem);

// Delete Item Event
itemsList.addEventListener('click', removeItem);

// Filter Items Event
filter.addEventListener('keyup', filterItems);

// Add Item Function
function addItem(e) {
    e.preventDefault();

    // Getting Input value
    var newItem = document.getElementById('item');
    var newItemDescription = document.getElementById('item-description');

    //If input field is empty then dont create item 
    if(newItem.value === '') { return; }

    // Creating a New List
    var li = document.createElement('li');
    li.className = 'list-group-item';
    
    var newBr = document.createElement('br');

    // Creating Delete, Edit Button and adding Description Text
    var deleteButton = createDeleteButton();
    var editButton = createEditButton();
    var descriptionText = createDescription(newItemDescription.value);

    // Making description in Italics


    // Adding input text to list
    li.appendChild(document.createTextNode(newItem.value));
    
    // Break Line only if description is not empty
    if(newItemDescription !== '') {

        li.append(newBr);
        li.appendChild(descriptionText);
    }

    // Adding buttons to our List
    li.appendChild(deleteButton);
    li.appendChild(editButton);

    // Appending newly created list to our item list
    itemsList.appendChild(li);

    //Removing text from AddItems
    newItem.value = '';
    newItemDescription.value = '';
}

// Remove Item Function
function removeItem(e) {
    e.preventDefault();

    if(e.target.classList.contains('delete')) {
            var li = e.target.parentElement;
            itemsList.removeChild(li);
    }
}

// Filter Items Function
function filterItems(e) {

    // Converting text input to lowercase
    var text = e.target.value.toLowerCase();
    
    // Get items List
    var items = itemsList.getElementsByTagName('li');

    // Converting HTML collection to Array
    Array.from(items).forEach(function(i) {

        // Getting item names
        var itemName = i.firstChild.textContent;
        var descriptionSearchText = i.children[1].textContent;
        console.log(descriptionSearchText);
        // Comparing
        if(itemName.toLowerCase().indexOf(text) != -1 || descriptionSearchText.toLowerCase().indexOf(text) != -1) {
            i.style.display = 'block';
        } else {
            i.style.display = 'none';
        } 
    }) 
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

// Create a Description Span Function
function createDescription(desc) {

    // Creating a new Span element
    var descriptionText = document.createElement('span');

    // Setting ID
    descriptionText.className = 'Description';

    // Adding the description value
    descriptionText.appendChild(document.createTextNode(desc));

    // Adding CSS Styling
    descriptionText.style.fontStyle = 'italic';
    descriptionText.style.fontSize = '14px';

    return descriptionText;
}
