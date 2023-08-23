function replaceFirstItem(){
    const firstitem = document.querySelector('li:first-child');

    const li = document.createElement('li');
    li.textContent = 'Replaced :) Item';

    firstitem.replaceWith(li);
}

// replaceFirstItem();

function replaceSecondItem(){
    const secondItem = document.querySelector('li:nth-child(2)');

    secondItem.outerHTML = `<li>Replaced ;) Second</li>`
}

// replaceSecondItem();


/*
--------- Replace all items
*/

function replaceAllItems(){
    const list = document.querySelectorAll('li');

    // list.forEach((li, index) =>{
    //     // li.outerHTML = '<li>Replace All</li>';
    //     // li.innerHTML = 'Replace ;) All';

    //     if(index === 1){
    //         li.innerHTML = 'Second Item'
    //     } else{
    //         li.innerHTML = 'Replace All'
    //     }
    // })

    // Sets outerHTML to condition
    list.forEach(
        (li, index) => 
        (li.outerHTML = index === 2 
            ? '<li>Second Item</li>' 
            : '<li>Item</li>'
        )
    );
}

replaceAllItems();

// function removeItem(item){
//     const list = document.querySelector('ul')
//     item = document.querySelector('li:nth-child(1)')
//     item.remove(list);
// }

// removeItem('li');

/*
--------- replace child
*/

function replaceChildHeading(){
    const header = document.querySelector('header');
    const h1 = header.querySelector('h1');

    const h2 = document.createElement('h2');
    h2.id = 'app-title';
    h2.textContent = 'Shopper List';

    header.replaceChild(h2, h1);
}

replaceChildHeading();