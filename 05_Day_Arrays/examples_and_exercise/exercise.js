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

const result = itCompanies.filter((company) => {
  const oCount = company
    .toLowerCase()
    .split("")
    .filter((char) => char === "o").length;
  return oCount <= 1;
});

console.log(result);

//! Sort the array using sort() method

const sortedCompanies = itCompanies.sort();
console.log(sortedCompanies);

//! Reverse the array using reverse() method

const reversedCompanies = itCompanies.reverse();
console.log(reversedCompanies);

//! Slice out the first 3 companies from the array

const slicedFirstThree = itCompanies.slice(0, 3);
console.log(slicedFirstThree);

//! Slice out the last 3 companies from the array

const slicedLastThree = itCompanies.slice(itCompanies.length - 3);
console.log(slicedLastThree);

//! Slice out the middle IT company or companies from the array

const slicedMiddle = itCompanies.slice(
  (itCompanies.length - 1) / 2,
  (itCompanies.length - 1) / 2 + 1
);
console.log(slicedMiddle);

//! Remove the first IT company from the array

console.log(itCompanies.shift());
console.log(itCompanies);

//! Remove the middle IT company or companies from the array

const removedMiddle = itCompanies.splice(itCompanies.length / 2 - 1, 2);

console.log(removedMiddle);

//! Remove the last IT company from the array

const removedEnd = itCompanies.pop();
console.log(removedEnd);

//! Remove all IT companies

console.log(itCompanies);
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);

//? ******************************************
console.clear();
//? ******************************************

//! First remove all the punctuations and change the string to array and count the number of words in the array

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

let newText = text.replaceAll(".", "").replaceAll(",", "");
console.log(newText);
const newTextArray = newText.split(" ");
console.log(newTextArray);

//! In the following shopping cart add, remove, edit items
//* add 'Meat' in the beginning of your shopping cart if it has not been already added
//* add Sugar at the end of you shopping cart if it has not been already added
//* remove 'Honey' if you are allergic to honey
//* modify Tea to 'Green Tea'

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

shoppingCart.unshift("Meat");
console.log(shoppingCart);

shoppingCart.push("Sugar");
console.log(shoppingCart);

console.log(shoppingCart.indexOf("Honey"));
shoppingCart.splice(4, 1);
console.log(shoppingCart);

console.log(shoppingCart.indexOf("Tea"));
shoppingCart.splice(3, 1, "Green Tea");
console.log(shoppingCart);

//? ******************************************
console.clear();
//? ******************************************

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

//! In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  console.log(countries);
}

//? ******************************************

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

//! In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}

//! Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);


