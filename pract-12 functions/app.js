const math = function add(num1, num2){
    return num1 - num2;
}

// math(1,2);

const result = math(5, 10);
const result2 = math(9, 11); 
const timeLeft = math(11.53, 4.03 )

// console.log(result, result2, timeLeft);



// Default param
function register(user = 'Alo'){
    return `${user} is registered`;
}

console.log(register());


// rest params
function sum(...numbers){
    let total = 0;

    numbers.forEach(num => {
        total += num
    });
    return total;
}

// console.log(sum(1,2,3,4,5));

// Objects as params

function loginUser(user){
    return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
    id: 1010008993,
    name:'Smitty'
}

// console.log(loginUser(user));



// Arrays and params
function getRandom(arr){
    const randomNum = Math.floor(Math.random() * arr.length);

    const item  = arr[randomNum];

    console.log(item);
}
getRandom([1, 2, 3, 4, 5]);


