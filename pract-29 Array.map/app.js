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


const mapNums = nums.map(num => {
    return num * 2;
})

// console.log(mapNums);

// same with forEach

// const doubleNumbers = [];

// nums.forEach(num =>{
//     doubleNumbers.push(num * 2)
// });

// console.log(doubleNumbers);

// create an array of company names
const arrCompanyNames = [];

// const companyNames = companies.forEach(companyName => {
//     arrCompanyNames.push(companyName.name)
// })



const companyNames = companies.map(companyName => {
    return companyName.name
})

// console.log(companyNames);

// create an object with company and category

const companyObjs = companies.map(company => {
    return {
        company: company.name,
        category: company.category
    }
})

// console.log(companyObjs);


// create an array of the length of each company in years

const yearsTrading = companies.map((company, id) => {
    return `Company ${id} has been trading for ${company.end - company.start} years`;
});

// console.log(yearsTrading);


// chaining different methods
const evenDouble = nums
    .filter(number => number % 2 === 0)
    .map(number => number * 2);

console.log(evenDouble);