let i = 0;

// while (i < 20) {
//     // console.log(i);
//     i++;
// }

const arrs = ['the', 'brown', 'dog', 'jumped'];
const arrs2 = [10, 20, 30, 40];

// while(i < arrs2.length){
//     console.log(arrs2[i]);
//     i++;
// }

/*
---- Nesting while loops
*/

while (i <= 5){
    console.log('Number ' + i);
    let j = 1;
    while(j <= 5){
        console.log(`${i} * ${j} = ${i * j}`);
        j++;
    }
    i++;
   
}


/*
----Do while loops
*/

do {
    console.log('number ' + i);
    i++;
} while( i < 20);