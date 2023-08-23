// insertAdjacentElements Example
function insertElement(){
    const filter = document.querySelector('.filter');
    // filter.style.border = `1px solid red`;

    const h1 = document.createElement('h1');
    h1.textContent = 'insertAdjacentElement';

    filter.insertAdjacentElement('beforebegin', h1)
}
// console.log(insertElement());



// insertAdjacentText Example
function insertText(){
    const item = document.querySelector('li:first-child');

    item.insertAdjacentText('beforebegin', 'insertAdjacentText');
}
// console.log(insertText());



// insertAdjacantHTML Example
function insertHTML(){
   const clearBtn = document.querySelector('#clear');
   clearBtn.insertAdjacentHTML('beforebegin', '<h2>InsertAdjacentHTML</h2>'); 
}

// console.log(insertHTML());

// insertBefore Example
function insertBeforeItem(){
    const ul = document.querySelector('ul');

    const li = document.createElement('li');
    li.textContent = 'insertBefore00';

    const thirdItem = document.querySelector('li:nth-child(3)');
    ul.insertBefore(li, thirdItem);
}

console.log(insertBeforeItem());


// insertAfter Custom challenge
function insertAfter(element, existingEl){
   
    existingEl.parentElement.insertBefore(element, existingEl.nextSibling);
}

    // New element to insert 
    const li  = document.createElement('li');

    li.textContent = 'Insert Me After';

    // Existing element to insert before
    const firstItem = document.querySelector('li:first-child');
 


console.log(insertAfter(li, firstItem));
