/*
----- Challenge 1
*/

const cels = (32 - 32) * .5556;
// console.log(cels);

const far = (14 * 1.8) +32;
// console.log(far); 

 const getCelsius = (far) => (far - 32) * 5 / 9;

//  console.log(`The temperature is ${getCelsius(50)} \xB0C`);


/*
----- Challenge 2
*/

// function minmax(arr){
// console.log(arr, ...arr);
    // return {
    //     min: Math.min(...arr),
    //     max: Math.max(...arr)
    // };
// }

// arrow function version
// minmax = (arr) => ({
//     min: Math.min(...arr),
//     max: Math.max(...arr)
// })

// console.log(minmax([ 2, 31, 4, 5]));
// console.log(minmax([67, 33, 109, 43, 95]));


/*
----- Challenge 3
*/



(function(length, width){
    const area = length * width
    console.log(area)
})(20, 10);

