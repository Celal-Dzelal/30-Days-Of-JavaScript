//! LEVEL 1

const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

//? Use forEach to console.log each country in the countries array.

countries.forEach((element) => console.log(element));

//? Use forEach to console.log each name in the names array.

names.forEach((name) => console.log(name));

//? Use forEach to console.log each number in the numbers array.

numbers.forEach((number) => console.log(number));

//? Use map to create a new array by changing each country to uppercase in the countries array.

const upperCountries = countries.map((country) => country.toUpperCase());
console.log(upperCountries);

//? Use map to create an array of countries length from countries array.

const lengthOfCountry = countries.map((country) => country.length);
console.log(lengthOfCountry);

//? Use map to create a new array by changing each number to square in the numbers array

const squareNumbers = numbers.map((number) => Math.pow(number, 2));
console.log(squareNumbers);

//? Use map to change to each name to uppercase in the names array

names.map((name) => console.log(name.toUpperCase()));

//? Use map to map the products array to its corresponding prices.

const priceArray = products.map((product) => product.price);
console.log(priceArray);

//? Use filter to filter out countries containing land.

const land = countries.filter((country) =>
  country.toLowerCase().includes("land")
);
console.log(land);

//? Use filter to filter out countries having six character.

const sixChar = countries.filter((country) => country.length === 6);
console.log(sixChar);

//? Use filter to filter out countries containing six letters and more in the country array.

const sixAndMore = countries.filter((country) => country.length >= 6);
console.log(sixAndMore);

//? Use filter to filter out country start with 'E';

console.log(countries.filter((country) => country.startsWith("E")));

//? Use filter to filter out only prices with values.

const priceValues = products.filter(
  (product) => product.price && product.price !== " "
);
console.log(priceValues);

//? Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

function getStringLists(array) {
  const stringItems = array.filter((item) => typeof item === "string");
  return stringItems;
}
const exerciseArray = ["Dzelal", "Velislav", "Zmajevic", 36, true];
console.log(getStringLists(exerciseArray));

//? Use reduce to sum all the numbers in the numbers array.

const sumOfNumbers = numbers.reduce((acc, num) => (acc += num), 0);
console.log(sumOfNumbers);

//? Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

const text = countries.reduce(
  (acc, item, i, array) =>
    i === array.length - 1
      ? acc + "and " + item + " are north European countries."
      : acc + item + ", ",
  "Estonia, "
);
console.log(text);

//? Use some to check if some names' length greater than seven in names array

const greaterSeven = names.some((name) => name.length > 7);
console.log(greaterSeven);

//? Use every to check if all the countries contain the word land

const containLand = countries.every((country) => country.includes("land"));
console.log(containLand);

//? Use find to find the first country containing only six letters in the countries array

const firstSixLetters = countries.find((country) => country.length === 6);
console.log(firstSixLetters);

//? Use findIndex to find the position of the first country containing only six letters in the countries array

const firstSixIndex = countries.findIndex((country) => country.length === 6);
console.log(firstSixIndex);

//? Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

const findNorway = countries.findIndex((country) => country === "Norway");
console.log(findNorway);

//? Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

const findRussia = countries.findIndex((country) => country === "Russia");
console.log(findRussia);
