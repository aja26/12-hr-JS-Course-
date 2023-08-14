// ||= assigns the right side value only if the left is a falsy value

let a = false;

if(!a){
    a = 10;
} else{
    a = 14;
}

// If a is falsy then set the right hand side
a = a || 10;

// console.log('a is =',a);

// shorter version
a ||= 10;

// &&= assigns the right value only if the left is a truthy value.
let b = 10;

if(b){
    b = 20;
}

// shorter version

b = b && 20;

// console.log(b);


