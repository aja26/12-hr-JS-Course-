let x;
const num = new Number(5.346);

x = num.toString();
x = num.toString().length;
x = num.toFixed(2);
x = num.toPrecision(3);
x = num.toExponential(3);
// x = num.toLocaleString('ar-EG');
x = num.toLocaleString('en-GB');
x = Number.MAX_VALUE;
x = Number.MIN_VALUE;


//console.log(x, typeof x);


// Math
//console.log(Math.floor(Math.sqrt(10)));
// console.log(Math.floor(Math.abs(10)));
// console.log(Math.floor(Math.round(10.82)));
// console.log(Math.floor(Math.ceil(10.1)));
// console.log(Math.floor(Math.min(10.1, 4, 6)));
//console.log(Math.floor(Math.max(10.1, 4, 6)));
//console.log(Math.floor(Math.random() * 10 + 1));


const newX = Math.floor(Math.random() * 100 + 1);
const newY = Math.floor(Math.random() * 50 + 1);


const sum = newX + newY;
const diff = newX - newY
const prod = newX * newY;
const div = newX / newY;
const rem = newX % newY;



console.log(newX, newY, sum, diff, prod, div, rem);
