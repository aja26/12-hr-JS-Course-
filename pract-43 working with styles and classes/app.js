const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = document.querySelectorAll('li');
const btn = document.querySelector('button');


function run(){
    // className -------------------------
    // console.log(itemList.className);
    // text.className = 'card dark';


    // classList -------------------------
    // console.log(itemList.classList);
    itemList.classList.forEach((c) => console.log(c));

    // text.classList.add('dark');
    // text.classList.remove('card');

    // text.classList.toggle('hidden');
    // text.classList.replace('card', 'dark')


    // Change Style -------------------------
    itemList.style.lineHeight = '3';
    items.forEach((item, idx) => {
        item.style.color = 'green'

        if(idx === 2){
            item.style.color = 'blue'
        }
    })
}


btn.onclick = run

// console.log(btn);