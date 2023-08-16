/*
------ Break ------
*/

// for(let i = 0; i <= 10; i++){
//     if(i === 3){
//         console.log('breaking');
//         break;
//     }
//     console.log(i);
// }

/*
------ Continue ------
*/

for(let i = 0; i <= 20; i++){
    if(i === 12){
        console.log('Skipping 13...');
        continue
    }

    console.log(i);
}