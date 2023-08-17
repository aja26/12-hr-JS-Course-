const ages = [67, 12, 2, 23, 33, 1, 16, 76, 94, 52];

const underAge = ages.filter(age => age < 18 ? age : '');

// console.log(underAge);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(nums => nums % 2 === 0);
const oddNunbers = numbers.filter(nums => nums % 2);

// console.log(`Even numbers ${evenNumbers}`);
// console.log(`Odd numbers ${oddNunbers}`);

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

// Get only retail companies

// const retail = companies.filter(company => company.category === 'Retail' ? company : '');

// console.log(retail);



// Get companies that started in or after 1980 and ended in or before 2005
 const eightiesStart = companies.filter(company => {
    if(company.start >= 1980 && company.end <= 2005){
        return company
    }

    })
// console.log(eightiesStart);


// Get companies that lasted 10 years or more

const tenYearCompanies = companies.filter(company =>{
    if(company.end - company.start >= 10){
        console.log(company);
    }
})
