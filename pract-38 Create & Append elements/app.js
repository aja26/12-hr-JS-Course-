const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');
div.innerText = 'hello World';

 document.body.appendChild(div);

console.log(div);