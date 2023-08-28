const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

/* ----------- easy way ------------ */
// listItems.forEach(item => {
//     item.addEventListener('click', (e) => {
//         e.target.remove();
//     })
// })

/* ------- event delegation -------- */

list.addEventListener('click', (e) => {
    e.preventDefault();

    if(e.target.tagName === 'I'){
        const close = e.target.parentElement.parentElement;
      close.remove();
    }
})