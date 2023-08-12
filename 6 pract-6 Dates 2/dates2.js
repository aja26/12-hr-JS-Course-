

let x;
let d = new Date();

x = d.toString();
x = d.getTime();
x = d.valueOf();


x = d.getFullYear();
x = d.getMonth() + 1;
x = d.getDate();
x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = `${d.getFullYear()} - ${d.getMonth()} - ${d.getDate()}`;

/* 

Get different time zone values
https://docs.trifacta.com/display/DP/Supported+Time+Zone+Values

*/

x = Intl.DateTimeFormat('en-GB').format(d);

x = d.toLocaleString('default', {month: 'long'});

x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
     timeZone: 'Europe/Madrid',
  

});


// gets day
// x = d.toDateString().substring(0, 3);


console.log(x);