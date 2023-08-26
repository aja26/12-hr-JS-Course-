const itemInput = document.getElementById('item-input');

function onKeyPress(e){
    console.log(e);
}

function onKeyUp(e){
    console.log(e.key);
}

function onKeyDown(e){
    // console.log(e.key);
    // document.querySelector('h1').innerText = e.key
    // console.log(e.keyCode);
    //  console.log(e.code);

    if(e.key === 'Enter'){
        alert('You pressed enter')
    }

    if(e.keyCode === 13){
        alert('You pressed enter');
    }

    if(e.code === 'Digit1' ){
         console.log('You pressed 1');

    }

    if(e.repeat){
        console.log('You are holding the key down ' + e.key);

   }

    // --><-- turn keypress into a boolean true / false value
    // console.log( 'P Key: ', e.key === 'p'); 
    // console.log('Shift ' + e.shiftKey); 
    // console.log( 'Alt: ', e.altKey);    
    // console.log( 'Control: ', e.ctrlKey);   

    if(e.shiftKey && e.key === 'K'){
        console.log('You hit shift + K');
    }
}

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);