let output;

// get child elements

const parent = document.querySelector('.parent');

output = parent.children
output = parent.children[0].innerText;
output = parent.children[0].className;
output = parent.children[0].nodeName;

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Child OnE';
parent.lastElementChild.innerText = 'Child Three :)';

// Get parent elements from child

const child = document.querySelector('.child');
output = child

child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.backgroundColor = '#f7f7f7';


// Sibling elements 
const secondItem = document.querySelector('.child:nth-child(2');

output = secondItem;
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = 'blue';
secondItem.previousElementSibling.style.textDecoration = 'underline';


console.log(output);