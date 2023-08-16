const str = 'banana';

// for(let i = 0; i < str.length; i++){
//     console.log(str[i]);
// }


// cut out from for loop
// for(let i = 0; i < 10; i++ ){
//     if(i === 7){
//         console.log('7 is my lucky number')
//     } else{
//         console.log(i);
//     }
// }



/*
----------- Nested loops
*/ 

// for(let i = 0; i <= 10; i++){
//     console.log('Number ' + i);

//     for(let j = 1; j <= 10; j++){
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

for(let i = 0; i < names.length; i++){
    if(names[i] === 'Sara'){
        console.log('Sara is the best');
    } else{
        console.log(names[i]);
    }
    
}

