function onClear(){
    console.log();
  
  alert('clear items');
}

// Javascript Event Listeners

const clearBtn = document.querySelector('#clear');

// btn.onclick = function (e){
//     e.preventDefault();
//     console.log('Clear Items');
// }

 clearBtn.addEventListener('click', onClear);

//  setTimeout(() => {
//     clearBtn.removeEventListener('click', onClear)
//  }, 5000);


// 

/*
------------------------------------------------------
---------- Trigger an event without clicking ---------
------------------------------------------------------
*/
 setTimeout(() => clearBtn.click(), 5000)