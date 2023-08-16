const num = 50;
const num2 = 10;

// if(num > num2){
//     console.log('false');
// } else{
//     console.log('true');
// }

const date = new Date(2023, 7, 8, 9, 15);
const hour = date.getHours(date);
const minute = date.getMinutes(date);


console.log(minute);
if(hour >= 9){
    console.log('ALARM wake up!');

    if(hour === 9 && minute === 15){
        console.log('Radio has come on')
    }
} else{
    console.log('zzz');
}
