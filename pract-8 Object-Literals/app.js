const person = {
    name: 'Adam',
    age: 34,
    colors: {
        first: 'blue',
        second: 'red',
        third: 'black'
    },
    isCool: true
}

person.colors.third = 'yellow;';

// remove property
delete person.age;

person.greet = function(){
    console.log(`hello, my name is ${this.name}`);
}

// person.greet();
// console.log(person, person2);


/*
    Object Spread + Methods
*/

const obj1 = {a: 1, b: 3};
const obj2 = {c: 2, d: 4}; 

const obj3 = {...obj1, obj2};
const obj4 = Object.assign({}, obj1, obj2)

// console.log(obj4);

const {name, age, isCool} = person;
const person2 = {...person};


const todos = [
    {id: 1, name: 'Buy milk'},
    {id: 2, name: 'Pick up kids'},
    {id: 3, name: 'Dog walk'},
];

let x = Object.keys(todos);
x = Object.values(obj2);
x = Object.entries(obj2);
// x = Object.keys(todos).length;

x = person.hasOwnProperty('isCool');


console.log(x);