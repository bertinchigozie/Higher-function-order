const companies = [
  { name: "Comapany One", category: "Finance", start: 1981, end: 2003 },
  { name: "Comapany Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Comapany Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Comapany Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Comapany Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Comapany Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Comapany Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Comapany Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Comapany Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// FOR LOOP
// for loop
// for (i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// forEACH
// forEach: to get single data from existing arrays
// companies.forEach(function (company, index, companies) {
//   console.log(company);
// });
// or
// companies.forEach((company) => {
//   console.log(company);
// });

// FILTER
// filter: to get set of unique data from an existing array and present them as an individual data
// let canDrink = [];
// for (i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// };

// console.log(canDrink);

// const canDrink = ages.filter(function (age) {
//   if (age >= 21) {
//     return true;
//   }
// });
// or
// const canDrink = ages.filter((age) => age >= 21);

// console.log(canDrink);

// Filter retail company
// const retailCompany = companies.filter(function (company) {
//   if (company.category === "Retail") {
//     return true;
//   }
// });
// or
// const retailCompany = companies.filter(
//   (company) => company.category === "Retail"
// );
// console.log(retailCompany);

// Get Retail companies in the 80s
// const eightyCompanies = companies.filter(
//   (company) =>
//     company.category === "Retail" &&
//     company.start >= 1980 &&
//     company.start < 1990
// );
// console.log(eightyCompanies);

// Get finance companies in the 80s
// const eightyCompanies = companies.filter(
//   (company) =>
//     company.category === "Finance" &&
//     company.start >= 1980 &&
//     company.start < 1990
// );

// console.log(eightyCompanies);

// Companies that lasted 10years
// const lastedTenYears = companies.filter(
//   (company) => company.end - company.start >= 10
// );
// console.log(lastedTenYears);

// MAP
// MAP: creating new Arrays of anything
// Create Array of company names
// const companyNames = companies.map(function (company) {
//   return company.name;
// });
// console.log(companyNames);

// create array of company names and category
// const companyNamesCategory = companies.map(function (company) {
//   return `${company.name}: ${company.category}`;
// });
// console.log(companyNamesCategory);

// create Array of company names with start to end year
// const companyNamesYear = companies.map(function (company) {
//   return `${company.name} (${company.start} - ${company.end})`;
// });
// console.log(companyNamesYear);

// create Array of company names with start to end year using Arrow function
// const companyNamesYear = companies.map(
//   (company) => `${company.name} (${company.start} - ${company.end})`
// );
// console.log(companyNamesYear);

// get square of the ages
// const agesSquare = ages.map((age) => age * age);
// console.log(agesSquare);

// get square root of the ages
// const agesSquare = ages.map((age) => Math.sqrt(age));
// console.log(agesSquare);

// Get squareroot of age and then times it by two
// const agesSquareTimesTwo = ages
//   .map((age) => Math.sqrt(age))
//   .map((age) => age * 2);
// console.log(agesSquareTimesTwo);

// SORT
//SORT: in the case, it takes in two parameter used to compare and contrast data in an array to get the exact result

// sort start to end year of the companies
// const sortedCompanies = companies.sort(function (c1, c2) {
//   if (c1.start > c2.end) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// or using Arrow function
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// console.log(sortedCompanies);

// Sort ages ascending order
// const sortAges = ages.sort((a, b) => a - b);
// console.log(sortAges);

// sort ages descending order
// const sortAgesDescend = ages.sort((a, b) => b - a);
// console.log(sortAgesDescend);

// Sort from the first digit of the number in ascending
// const sortAgesFirst = ages.sort();
// console.log(sortAgesFirst);

// REDUCE
// using for loop to sum the ages
// let ageSum = 0;
// for (i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }
// console.log(ageSum);

// const ageSum = ages.reduce(function (total, age) {
//   return total + age;
// }, 0);
// console.log(ageSum);

// using arrow function
// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// get total start year
// const totalYearsStart = companies.reduce(function (total, company) {
//   return total + company.start;
// }, 0);
// console.log(totalYearsStart);

// get total year of diff between start and end year
// const totalYears = companies.reduce(function (total, company) {
//   return total + (company.end - company.start);
// }, 0);
// console.log(totalYears);

// use arrow function
// const totalYears = companies.reduce(
//   (total, company) => total + company.end - company.start,
//   0
// );
// console.log(totalYears);
// or
// const totalYears = companies.reduce(
//   (total, company) => total + (company.end - company.start),
//   0
// );
// console.log(totalYears);

// Combined method

const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((total, age) => total + age, 0);

console.log(combined);
