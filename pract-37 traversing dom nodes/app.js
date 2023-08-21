let output;
const parent = document.querySelector('.parent');

output = parent.childNodes;
output = parent.childNodes[3].nodeName;
output = parent.childNodes[3].innerText;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerText = 'Child One';
output = parent.childNodes[5].style.color = 'red';

output = parent.firstChild;
output = parent.lastChild;

parent.lastChild.textContent = 'hello';

// Parent node

const child = document.querySelector('.child');

output = child.parentNode;

child.parentNode.style.backgroundColor = '#ccc'


// Sibling
const secondItem = document.querySelector('.child:nth-child(1)');
output = secondItem.nextSibling;
output = secondItem.previousSibling;




console.log(output);