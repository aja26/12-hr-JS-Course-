// challenge 1

// for(let i = 1; i < 101; i++){
    
//     if(i % 15 === 0){
//         console.log('Fizz Buzz');
//     } else if(i % 3 === 0){
//         console.log('fizz');
      
//     } else if( i % 5 === 0){
//         console.log('buzz')
//     } else {
//         console.log(i);
//     }
    
// }

// challenge 1 using while

let j = 0;

while( j <= 100){
    if(j % 15 === 0){
        console.log('Fizz Buzz');
    } else if(j % 3 === 0){
        console.log('fizz');
      
    } else if( j % 5 === 0){
        console.log('buzz')
    } else {
        console.log(j);
    }
    j++
}