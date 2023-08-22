const list = document.getElementById('item-list');

function createItem(item){
    const li = document.createElement('li')
    li.className = 'item';
    li.innerHTML = ` ${item}
    <button class="remove-item btn-link text-red">
        <i class="fa-solid fa-xmark"></i>
    </button>`;
    list.appendChild(li);

}

  createItem('Eggs');

//  Clean and performant

function createNewItem(item){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = createButton('remove-item btn-link text-red');

  
    li.appendChild(button);

    list.appendChild(li);
}

function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);

    return button;
}

function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes
    return icon;
}

createNewItem('cheese');


