// console.log(10 < 20 && 30 > 15 && 40 > 30);
// console.log(10 > 20 || 30 > 15);

// && - Will return the first falsy value or the last value
let a;

a = 10 && 0 && 30;

// console.log(a);

const posts = [];

posts.length > 0 && console.log(posts[0]);

//  || (or operator) - Will return the first truthy value or the last value 

let b;

b = ' ' || 0;
b = 0 || null || undefined;

// console.log(b);

// ?? - Returns the right side opperand when the left is null or undefined

let c;

c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 30;
c = 0 ?? 30;
c = '' ?? 30;
console.log(c);