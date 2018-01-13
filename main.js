const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Standard for loop
// for(let i=0;i<companies.length;i++){
//     console.log(companies[i]);
// }


//GET 21 and older
// forEach loop
// companies.forEach(function(company){
//     console.log(company);
//     console.log(company.name);
// });

// filtering using for loop
// let canDrink = [];
// for(let i=0;i<ages.length;i++){
//     if(ages[i] >= 21){
//         canDrink.push(ages[i]);
//     }
// }

// filtering using filter function
// const canDrink = ages.filter(function(age){
//     return (age>=21);
// });

// filtering using filter by ES6 arrow function
const canDrink = ages.filter(age => age >=21);

console.log(canDrink);

// Filter the retail companies
// const retail = companies.filter(function(company){
//     if(company.category === 'Retail'){
//         return true;
//     }
// });

// Filter the retail companies using arrow functions
const retail = companies.filter(company => company.category === 'Retail');

console.log(retail);

// Get 90s companies
const eigtyCompanies = companies.filter(company => company.start >= 1980 && company.start <1990);

console.log(eigtyCompanies);

// Get the companies that latest atleast 10 years
const decadeOld = companies.filter(company => (company.end - company.start) >= 10);
console.log(decadeOld);