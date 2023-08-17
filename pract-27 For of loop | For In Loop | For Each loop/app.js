const items = [
    'apple',
    'water bottle',
    'pen',
    'paper',
    'earphones',
    'laptop',
    'shorts'
];

/*
------------ For OF LOOP ----------
*/


// console.log(items);

// for (const item of items) {
//     console.log(item + ' in bag')
// }

// const sentence = ` The brown dog jumped over the fence`;

// for (character of sentence){
//     if(character === ' '){
//         sentence.split(character)
//     } else{
//         console.log(character);
//     }
// }


/*
------------ For IN loop ----------
------- USEFUL FOR OBJECTS --------
*/


const obj = {
    name: 'Steve',
    age: 109,
    likesCheese: true
};

for (const stuff in obj) {
    console.log(stuff, obj[stuff]);
}


/* 
------------ For Each ----------
*/

// items.forEach((item, index, arr) => {
//     console.log(`${index} - ${item}`);
// })


const socials = [
    {name:'Twitter', url: 'https//twitter.com'},
    {name:'Facebook', url: 'https//facebook.com'},
    {name:'LinkedIn', url: 'https//linkedIn.com'},
    {name:'Instagram', url: 'https//Instagram.com'}
];

// socials.forEach(social => {
//     console.log(social.url)
// })