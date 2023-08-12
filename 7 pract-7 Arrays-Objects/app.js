const nums = [12, 45, 33, 29, 39];
const nums2 = new Array('apple', 'cheese', 'lemon')

// console.log(nums, nums2.length);

nums2[1] = 'bacon';
nums2[nums2.length] = 'terry';


// console.log(nums2);

// METHODS
const simp = [1, 2, 3, 4, 5];
const arr = [34, 55, 95, 20, 15];

// arr.push(908767374);
// arr.pop();
// arr.unshift(1345);
// arr.shift();
// arr.reverse();

let x = arr.includes(95);
x = arr.indexOf(55);
x = arr.slice(1, 3);
// x = arr.splice(3,1);

// console.log(x, arr);




// const sum = simp.reduce((pre, cur) =>  pre + cur);
// console.log(sum);

/*
Array nesting and concat spread
*/

let a;

const fruits = ['apple', 'pear', 'orange'];

const berries = ['strawberry', 'rasberry', 'blueberry'];

// fruits.push(berries);

// a = fruits[2][0];

a = fruits.concat(berries);
// const allFruits = [...fruits, ...berries];


// flatten Arrays
const manyNestedArrays = [[1,3,4,6], 3,[20, 2], 3, 2, [90, 12]];
a = manyNestedArrays.flat();

// console.log(a);

/*
    Static Methods on Array Object
*/

a = Array.isArray(fruits);
a = Array.from('12345');

const aa = 66;
const bb = 99;
const cc = 33;

a = Array.of(aa,bb,cc);

// console.log(a);

const testArr = [1, 2, 3, 4, 5];

a = testArr.push(6);
a = testArr.unshift(0);
a = testArr.reverse()

// console.log(testArr);

const testArr1 = [1, 2, 3, 4, 5];
const testArr2 = [5, 6, 7, 8, 9, 10];

a = [...testArr1, ...testArr2];
// console.log(a);
a.splice(5, 1)
console.log(a);