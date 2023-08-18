const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004},
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
];


const total = nums.reduce((pre, cur) => pre + cur, 0);
// console.log(total);

const total2 = () => {
    let acc = 0;
    for  (cur of nums) 
        acc += cur;
    
    return acc
}

// console.log(total2())

const cart = [
    {id: 1, name: 'Product 1', price: 130},
    {id: 2, name: 'Product 2', price: 150},
    {id: 3, name: 'Product 3', price: 175}
];

const priceTotal = cart
    // .map(product => product.price)
    .reduce((prev, acc) => prev + acc.price, 0)    


console.log(priceTotal);