const clear = document.getElementById('clear');

function runEvent(e){
    setTimeout(() => {
        console.log(e);
    }, 2000);
}

// window.addEventListener('load', runEvent);

 window.addEventListener('DOMContentLoaded', runEvent);


 window.addEventListener('resize', () => {
    document.querySelector('h1').innerText = `Resized ${window.innerWidth} x ${window.innerHeight}`;
 })

//  window.addEventListener('scroll', () => {
//     console.log(`Scroll ${window.scrollX} x ${window.scrollY}`)

//     if(window.scrollY > 50){
//         document.body.style.backgroundColor = 'black';
//         document.body.style.color = 'white';
//         clear.style.color = 'white'
//     } else{
//         document.body.style.backgroundColor = '#f5f5f5';
//         document.body.style.color = '#333';
//         clear.style.color = 'black'
//     }
//  })

window.addEventListener('focus', () => {
    document.querySelectorAll('p').forEach(p => {
        p.style.color = 'blue';
    })
})

window.addEventListener('blur', () => {
    document.querySelectorAll('p').forEach(p => {
        p.style.color = 'black';
    })
})