// querySelectorAll();

const listItems = document.querySelectorAll('.item');

// console.log(listItems[0].innerText);

// listItems[1].style.color = 'green';

// listItems.forEach((item, index) => {
//     item.style.color = 'blue';

//     if(index === 1){
//         item.remove();
//     }

//     if(index === 0 ){
//         item.innerHTML = `Oranges x2
//         <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//         </button>`
//     }
// })

const listItems2 = document.getElementsByClassName('item');

// console.log(listItems2[2].innerText);

const listArray = Array.from(listItems2);

listArray.forEach(item => {
    console.log(item.innerText);
});

const listItem3 = document.getElementsByTagName('li');

console.log(listItem3[0].innerText);