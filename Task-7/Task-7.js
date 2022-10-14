var itemsList = document.querySelector('#items');

// Parent Element
itemsList.parentElement.style.backgroundColor = '#d7dfe0';

// Last Element Child
itemsList.lastElementChild.style.backgroundColor = '#ebe18a';

// Last Child
itemsList.lastChild.textContent = 'This is extra text for Last Child';

// First Element Child
itemsList.firstElementChild.style.backgroundColor = '#ebe18a';  

// First Child
itemsList.firstChild.textContent = 'This is extra text for First Child';

// Next Sibling
itemsList.nextSibling.textContent = 'This is extra text for Next Sibling';

// Next Element Sibling
var mainHeader = document.querySelector('#main-header');
mainHeader.nextElementSibling.style.backgroundColor = '#23557a';

// Previous Sibling
itemsList.previousSibling.textContent = 'This is extra text for Previous Sibling';

// Previous Element Sibling
itemsList.previousElementSibling.textContent = 'Items List';

// Create Element
var newDiv = document.createElement('div');

// Set Attribute
newDiv.setAttribute('class', 'NewDiv');

// Create Text Node
var newDivText = document.createTextNode('This is the newly created div');

// Append Child
newDiv.appendChild(newDivText);

//Inserting new Div into the DOM
var container = document.querySelector('header .container');
var headerH1 = document.querySelector('header h1');
container.insertBefore(newDiv, headerH1);

// Adding Hello before item lister
var headerTitle = document.querySelector('#header-title');
headerTitle.previousSibling.textContent = 'Hello';

// Adding Hello before item 1
itemsList.firstElementChild.previousSibling.textContent = 'Hello';


