const li = document.getElementsByTagName('li');
const items = document.getElementsByClassName('list-group-item');

for(let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#45f3';
}

for(let i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = '#9999';
    li[i].style.fontWeight = 'bold';
}