/*
-----/Falsy Values/------
*/

// false
// 0
// "" or ''
// underfined
// null

const x = false;

// if(x){
//     console.log('This is truthy');
// } else{
//     console.log('This is falsy');
// }

/*
-----/Truthy Values/------
*/

// true
// '0' (0 in a string)
// " " space in a string
// [] (empty array)
// {} empty object
// funtion (){} (empty function)

const y = ' ';

// if(y){
//     console.log('This is truthy');
// } else{
//     console.log('This is falsy');
// }



/*
-----/issues with objects and array and truthy falsy/------
*/

// ARRAYS

// const arr = [];

// if(arr.length > 0){
//      console.log('This is truthy');
// } else{
//     console.log('This is falsy');
// }

// OBJECTS

const arr2 = {
    // name: 'john',
    // id: 9
};

if(Object.keys(arr2).length > 0){
     console.log('This is truthy');
} else{
    console.log('This is falsy');
}


// Loose Equality

console.log(false === 0); `dont use ==`