// current target is what ever the event is attached to
// target is whereever i click on the page

const logo = document.querySelector('img');

function onclick(e){
    // console.log(e.target);
    // console.log(e.currentTarget)
     e.target.style.border = '1px solid red';
    // console.log(e.type);
    // console.log(e.timeStamp);
    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.log(e.offsetX);
    // console.log(e.offsetY);
    // onsole.log(e.pageX);
    // console.log(e.pageY);
    console.log(e.screenX);
    console.log(e.screenY);
    // e.preventDefault();
}

function onDrag(e){
    document.querySelector('h1').textContent = `x ${e.clientX} Y ${e.clientY}`;
}

 logo.addEventListener('click', onclick);
 logo.addEventListener('drag', onDrag)
// document.body.addEventListener('click', (e) => {
//     console.log(e.target);
//     console.log(e.currentTarget)
// });


