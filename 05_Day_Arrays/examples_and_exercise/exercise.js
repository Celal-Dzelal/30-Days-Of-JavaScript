//! Declare an empty array;

{
  const emptyArray = [];
  const emptyArray2 = Array();
  console.log(emptyArray, emptyArray2);
}

//! Declare an array with more than 5 number of elements

{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(numbers);

  const numbers2 = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  console.log(numbers2);
}

//! Find the length of your array

{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(`Length of the Array: ${numbers.length}`);
}

//! Get the first item, the middle item and the last item of the array

{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  console.log(`First Item: ${numbers[0]}`);
  console.log(`Middle Item: ${numbers[(numbers.length - 1) / 2]}`);
  console.log(`Last Item: ${numbers[numbers.length - 1]}`);
}

//! Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

{
  const mixedDataTypes = [
    "Dzelal",
    1,
    2,
    true,
    ["a", "b", "c"],
    { name: "Ali" },
  ];

  console.log(mixedDataTypes.length);
}

//! Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

//! Print the array using console.log()

console.log(itCompanies);

//! Print the number of companies in the array

console.log(itCompanies.length);

//! Print the first company, middle and last company

console.log(`First: ${itCompanies[0]}`);
console.log(`Middle: ${itCompanies[(itCompanies.length - 1) / 2]}`);
console.log(`Last: ${itCompanies[itCompanies.length - 1]}`);

//! Print out each company

for (const company of itCompanies) {
  console.log(company);
}

//! Change each company name to uppercase one by one and print them out

for (const element of itCompanies) {
  console.log(element.toUpperCase());
}

//! Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

const firstFive = itCompanies.slice(0, 6);
console.log(firstFive);
console.log(
  `${firstFive.join(", ")} and ${itCompanies[6]} are big IT companies`
);

//! Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

const isIn = itCompanies.includes("Samsung");
if (isIn) {
  console.log("Samsung");
} else {
  console.log("Company is not found");
}

//! Filter out companies which have more than one 'o' without the filter method

//! Sort the array using sort() method
//! Reverse the array using reverse() method
//! Slice out the first 3 companies from the array
//! Slice out the last 3 companies from the array
//! Slice out the middle IT company or companies from the array
//! Remove the first IT company from the array
//! Remove the middle IT company or companies from the array
//! Remove the last IT company from the array
//! Remove all IT companies
