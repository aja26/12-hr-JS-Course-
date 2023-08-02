// values on the stack

const name = 'John';
const age = 21;

// reference values are stored on the heap

const person = {
    name:'adam',
    age: 34
};

let newName = name;
newName = 'Jonathan';

let newPerson = person
newPerson.name = 'sussan';

console.log(name, newName);
console.log(person, newPerson);