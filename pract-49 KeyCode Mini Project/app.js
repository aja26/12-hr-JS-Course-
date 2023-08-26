/*
-------------------------------------------                 
---------------- Method 1
-------------------------------------------
*/ 

// const keys = document.querySelectorAll('.key');

// function changeKeys(e){
//    keys.forEach((key, idx) => {

//         if(e.key === ' '){
//             idx === 0 ? key.innerHTML = `space <small>e.key</small>` : ''
//             idx === 1 ? key.innerHTML = `${e.keyCode} <small>e.keyCode</small>` : ''
//             idx === 2 ? key.innerHTML = `${e.code} <small>e.keyCode</small` : ''
//         } else {
//             idx === 0 ? key.innerHTML = `${e.key} <small>e.key</small>` : ''
//             idx === 1 ? key.innerHTML = `${e.keyCode} <small>e.keyCode</small>` : ''
//             idx === 2 ? key.innerHTML = `${e.code} <small>e.keyCode</small` : ''
//         }
//     })
// }

// window.addEventListener('keydown', changeKeys);



/*
-------------------------------------------                 
---------------- Method 2
-------------------------------------------
*/ 

function showKeyCodes(e){
    const insert = document.getElementById('insert');
    insert.innerHTML = '';

    const keyCodes = {
        'e.key': e.key === ' ' ? 'Space' : e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code
    }

    for(let key in keyCodes){
        const div = document.createElement('div');
        div.className = 'key';
        const small = document.createElement('small');
        const keyText = document.createTextNode(key);
        const valueText = document.createTextNode(keyCodes[key]);

        small.appendChild(keyText);
        div.appendChild(valueText);
        div.appendChild(small);
        
        insert.appendChild(div);

    }
}

window.addEventListener('keydown', showKeyCodes);