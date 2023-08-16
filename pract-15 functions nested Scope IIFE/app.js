
// Children can access parent scopes 
function first(){
    const x = 100;

    // parents cannot access child scopes
    // below console log creates error
    // console.log(y);

    function second(){
        const y = 200;
        // console.log(x + y);
        // console.log(x);
    }

    second();
}

first();

/*
----- FUNCTION DECLARATION VS EXPRESSION
*/

// Function Declaration
function addPoundSign(value){
    return `£${value}`;
}

console.log(addPoundSign(100));

// Function Expression

const addPlusSign = function(val){
    return `+${val}`;
};

console.log(addPlusSign(10));

/*
----- Arrow functions
*/


// function add(a,b){
//     return a+b;
// }

const add = (a,b) => a + b;


console.log(add(8, 2))

// returning an object
const createObj = () => ({
    name:'brad',
});

console.log(createObj());


const numbers = [1, 2, 3, 4, 5];

// Arrow function in a callback
numbers.forEach((num) =>  console.log(num));


// IIFE Immediately invoked function expressions
(function(){
    console.log('Immediately invoked');
})();

(function(name){
    console.log('Hello' + name);
})(' poo');