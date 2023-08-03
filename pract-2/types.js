let amount = 0;
let amount2 = '99.3';


/*
 ------ convert sring to number
*/

// amount = parseInt(amount);
// amount = +amount;
// amount = Number(amount);

//console.log(amount, typeof amount);

/*
 ------ convert number to string
*/

// amount = amount.toString();
//amount = String(amount);
//console.log(amount, typeof amount);


/*
 ------ convert string to decimal
*/

amount2 = parseFloat(amount2);
// console.log(+amount2, typeof +amount2);
//console.log(+amount2, typeof +amount2);


/*
 ------ convert number to boolean
*/

amount = Boolean(amount);
//  console.log(amount, typeof amount);


 /*
 ------ concatenation
*/

//x = 'hello' + ' world';

//console.log(x);

/*
 ------ Exponent
*/

// below is the same as (3 * 3) * 3 = 27 or to the power of

// x = 3 ** 3;

//console.log(x);



/*
 ------ increment
*/

let x = 1;
x++
// console.log(x);

/*
 ------ Decrement
*/

x--
// console.log(x);

/*
 ------Assignment Operators
*/

p = 10;

// p += 5;
// p -= 5;
// p *= 5
// p /=  5;
 p %= 5;


// console.log(p);

/*
 ------Comparison Operators 
*/

let r = 2;
// r = 2 === '2';

r = 2 != 3;

r = 2 !== 3;

r = 10 > 5;
r = 10 < 5;
r = 10 <= 100;
r = 10 >= 10;


// r = 5 + true;
r = Number(true);

r = 5 + true;
r = 5 + false
r = 5 * '4';
r = 5 + '4'
console.log(r);