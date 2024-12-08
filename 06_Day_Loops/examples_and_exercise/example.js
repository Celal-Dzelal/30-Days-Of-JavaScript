//!---------------------- FOR LOOP ----------------------

//? Syntax: for(initialization, condition, increment/decrement) { codes }

//* Examples

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

for (let i = 5; i >= 0; i--) {
  console.log(i);
}

for (let i = 0; i <= 5; i++) {
  console.log(i * i); //* In every loop, i is going to be multiplying by itself */
}

const countries = ["Croatia", "Bosnia", "Kosovo", "Macedonia", "Hungary"];
const newArray = []; //* We create an empty array
for (let i = 0; i < countries.length; i++) {
  //* We set the for loop
  newArray.push(countries[i].toUpperCase()); //* Every item of countries array, will become an uppercase and then push to the newArray.
}
console.log(newArray);

//* Example (Sum of the elements)

const numbers = [1, 2, 3, 4, 5];
let sum = 0; //* We create an variable which is named sum and value is 0.
for (let i = 0; i < numbers.length; i++) {
  //* We built the loop which loops every items of numbers array
  sum += numbers[i]; //* In every loop, item of numbers array will add to sum variable
}
console.log(sum);

//* Example (Create a new array)

let numbers1 = [10, 20, 30, 40, 50];
let newArray1 = []; //* We create an empty array which is named newArray1
for (let i = 0; i < numbers.length; i++) {
  //* We built the loop which loops every items of numbers array
  newArray1.push(numbers1[i] / 2); //* Every item of numbers1 is going to divide by two and push to the newArray1.
}
console.log(newArray1);

//? While Loop: while(condition) {code block + increment/decrement};

let i = 0; //* We create an variable which is named i and its value is 0
while (i <= 5) {
  //* While i variables' value is smaller than 5, loop will continue
  console.log(i); //* Write the i value to the console
  i++; //* After the console writing, increase the value i is 1 and continue to loop
}

//? Do While Loop: do {code block + increment/decrement} while (condition);

let i1 = 0;
do {
  console.log(i1);
  i1++;
} while (i1 <= 5);

//? FOR OF LOOP: for(const element of array) {code bloc};

const cities = [
  "Sarajevo",
  "Moscow",
  "Budapest",
  "Istanbul",
  "Berlin",
  "Oslo",
  "Milan",
];
const newCities = [];
const newCities1 = [];
for (const city of cities) {
  console.log(city);
  newCities.push(city.toUpperCase()); //* ['SARAJEVO', 'MOSCOW', 'BUDAPEST', 'ISTANBUL', 'BERLIN', 'OSLO', 'MILAN']
  if (city.length > 5) {
    newCities1.push(city); //* ['Sarajevo', 'Moscow', 'Budapest', 'Istanbul', 'Berlin']
  }
}
console.log(newCities);
console.log(newCities1);

//? Break: interrupt a loop

for (let i = 0; i <= 10; i++) {
  if (i == 7) {
    //* Limit of the loop
    break; //* After 6, loop will not work
  }
  console.log(i);
}

//? Continue: skip certain iterations

for (let i = 0; i <= 10; i++) {
  if (i == 1 || i == 9 || i == 0 || i == 5) {
    //* Skip the 1,9,0,5
    continue;
  }
  console.log(i);
}
