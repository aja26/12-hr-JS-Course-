// step 1
const library = [
    {
        title: 'Smarties adventures',
        author: 'Chocco Late',
        status:{
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'A dog story',
        author: 'Kitty',
        status:{
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'The Dancing Parrot',
        author: 'Alasdaire',
        status:{
            own: true,
            reading: false,
            read: false
        }
    }
];

// step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// step 3
let {title: firstBook} = library[0];
title = 'new title';

console.log(firstBook, library);


// step 4
const lib = JSON.stringify(library);
console.log(lib);