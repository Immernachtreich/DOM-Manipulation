// console.dir(document);

console.log(document.domain);
console.log(document.URL);

console.log(document.title);

document.title = "Basics of DOM";

console.log(document.head);
console.log(document.body);

console.log(document.forms);
console.log(document.links);

console.log(document.getElementById('header-title').innerText);

var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');

headerTitle.innerText = 'Basics Of DOM';
header.style.borderBottom = 'solid 3px #000';

var AddItems = document.getElementById('Add-Items');

AddItems.style.fontWeight = 'bold';
AddItems.style.color = 'green';