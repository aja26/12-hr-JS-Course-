const d = new Date(2023, 3, 10, 8, 0, 0);
const month = d.getMonth();

console.log(month);

switch (month) {
    case 1:
        console.log('It is January');
        break;
    case 2:
        console.log('It is February');
        break;
    case 3:
        console.log('It is March');
    default:
        break;
}