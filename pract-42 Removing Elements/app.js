// remove
function removeClearButton(){
    const clearbtn = document.querySelector('#clear');
    clearbtn.remove();
}
//  removeClearButton();


// removeChild
function removeFirstItem(){
    const ul = document.querySelector('ul');
    const li = ul.querySelector('li:first-child')
    ul.removeChild(li);
}

// removeFirstItem();


function removeItem1(itemNumber){
    const ul = document.querySelector('ul');
    const item  = ul.children[itemNumber];
    ul.removeChild(item);
}

//  removeItem1(3);


//  Alternative solution

function removeItem2(itemnumber){
    const li = document.querySelectorAll('li');
    li[itemnumber - 1].remove();
}

removeItem2(2);