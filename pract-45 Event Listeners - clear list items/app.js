const clear = document.getElementById('clear');
const li = document.querySelectorAll('li');


function clearItems(){
  console.log(li, clear);
  li.forEach(listItem => {
    listItem.remove();
  })
}

clear.addEventListener('click', (e) => {
  e.preventDefault();
  clearItems();
})