//QuerySelector

var firstItem = document.querySelector('.list-group-item:first-child');
firstItem.style.backgroundColor = '#40c749';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display = 'none';

//QuerySelector All

//Making Item 3 visible again
thirdItem.style.display = '';

var items = document.querySelectorAll('.list-group-item');
items[1].style.color = '#40c749';

var oddItems = document.querySelectorAll('.list-group-item:nth-child(odd)');

for(let i = 0; i < oddItems.length; i++) {
    oddItems[i].style.backgroundColor = '#6ec47b';
}