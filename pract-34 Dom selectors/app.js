// document.getElementById();

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').getAttribute('id'));


// set attributes

console.log(document.getElementById('app-title').className = 'title');
console.log(document.getElementById('app-title').title = 'My New Title');
console.log(document.getElementById('app-title').className = 'title');
console.log(document.getElementById('app-title').setAttribute('cheese', 'cheddar'));
console.log(document.getElementById('app-title').classList.add('new-class'));

const title = document.getElementById('app-title');

title.textContent = 'Macbook Air';
title.innerText = 'Hello World';
title.innerHTML = `<strong>Shopping List</strong>`;


// Change Styles

title.style.color = 'blue';
title.style.backgroundColor = '#d1d1d1';
title.style.padding = '2rem';
title.style.borderRadius = '0.5rem';


// document.querySelector()

console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.new-class'));
console.log(document.querySelector('input[type="text"]'));

const secondItem = document.querySelector('li:nth-child(2');
secondItem.innerText = 'Tomatoe Juice';
secondItem.style.color = 'red';

// use these methods on other elements

const list  = document.querySelector('ul');
console.log(list);

const firstItem = list.querySelector('li');
firstItem.style.color = 'green';
