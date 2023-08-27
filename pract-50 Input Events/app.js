const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkBox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e){
    console.log(e.target.value);
}

function oncheck(e){
    const isChecked = e.target.checked;
    heading.textContent = isChecked ? 'Checked' : 'Not Checked'
}

function onFocus(e){
    console.log('input is focused');
    itemInput.style.outline = 'solid 2px green';
}

function onBlur(e){
    console.log('input is not focussed');
    itemInput.style.outline = 'none';
}

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);
checkBox.addEventListener("input", oncheck);

itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);

