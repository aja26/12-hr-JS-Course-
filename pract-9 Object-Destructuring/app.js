const firstName = 'Brody';
const lastName = 'Janets';
const age = 12;

const dog = {
    firstName,
    lastName,
    age
}

// console.log(dog.age);

// Destructuring

const todo = {
    id: 108775675,
    title: 'Take out trash',
    user: {
        name: 'John',
        Profession: 'Historian'
    }
};

const {id: todoId, title, user:{name},} = todo;

// console.log(todoId, title, name);

const numbers = [23, 34, 52, 11];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);