//! Create an Empty Array

{
  const arr = Array();
  console.log(arr);
}

{
  const arr = [];
  console.log(arr);
}

//! Create an Array with Values

{
  const numbers = [0, 3.14, 9.81, 37, 100];
  console.log(numbers);
  console.log(numbers.length);

  const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
  console.log(countries);
  console.log(countries.length);
}

//? Arrays can have item of different data types

{
  const arr = [
    "Dzelal",
    36,
    true,
    { country: "Turkey" },
    { skills: ["HTML", "CSS", "JAVASCRIPT"] },
  ];
  console.log(arr);
  console.log(arr.length);
}

//! SPLIT METHOD TO CREATE ARRAY

//? SYNTAX: string.split("seperator");

{
  let js = "JavaScript";
  const charsInJs = js.split("");
  //* All characters will split and all of them become an array element*/
  console.log(charsInJs);

  let text = "Hello World, I'm Dzelal";
  const wordArray = text.split(" ");
  //* String will split from spaces and every word become an array element*/
  console.log(wordArray);

  let countries =
    "USA, RUSSIA, FRANCE, GERMANY, SPAIN, ITALY, DENMARK, HUNGARY, POLAND, BOSNIA";
  let countryArray = countries.split(", ");
  console.log(countryArray);
}

//! ACCESSING ARRAY ITEMS

{
  let countries =
    "USA, RUSSIA, FRANCE, GERMANY, SPAIN, ITALY, DENMARK, HUNGARY, POLAND, BOSNIA, TURKEY";
  let countryArray = countries.split(", ");
  let firstItem = countryArray[0];
  let middleItem = countryArray[(countryArray.length - 1) / 2];
  let lastItem = countryArray[countryArray.length - 1];
  console.log(firstItem);
  console.log(middleItem);
  console.log(lastItem);
}

//! MODIFYING ARRAY ELEMENT

{
  const numbers = [1, 2, 3, 4, 5];
  numbers[0] = 10;
  numbers[1] = 20;
  console.log(numbers);
}

//! METHODS TO MANIPULATE ARRAY

//? Array Constructor

{
  const eightEmptyValues = Array(8); //* Creates eight empty values
  console.log(eightEmptyValues);

  const arr = Array(); //* Create an empty array
  console.log(arr);
}

//? Creating Static Values with Fill

{
  const eightEmptyValues = Array(8);
  console.log(eightEmptyValues.fill("X")); //* Fill the empty elements with "X"
}

//? Concatenating Array Using Concat

{
  const listOne = [1, 2, 3];
  const listTwo = [10, 20, 30];
  const listThree = listOne.concat(listTwo);
  console.log(listThree);
}

//? Getting Index an Element

//* SYNTAX: array.indexOf(element) => Return index number or -1.

{
  const numbers = [1, 2, 3, 4, 5];
  console.log(numbers.indexOf(3)); //* Index of 3 is 2
}

{
  const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
  console.log(countries.indexOf("Turkey")); //* Is Turkey in the countries array? It returns -1, if it is not in the list.
}

//? lastIndexOf: position of the last item in the array

//* SYNTAX: array.lastIndexOf(element)

{
  const numbers = [1, 2, 3, 4, 5, 2, 3, 4, 2, 3, 4, 5];
  console.log(numbers.lastIndexOf(2)); //* last index of the 2 is 8
}

//? Includes: item exist in an array. Returns true or false.

//* SYNTAX: array.includes(element) => Returns true or false

{
  const numbers = [1, 2, 3, 4, 5];
  console.log(numbers.includes(5)); //* True
  console.log(numbers.includes(6)); //* False
}

//? isArray: check if the data type is an array. Returns true or false

{
  const numbers = [1, 2, 3, 4, 5];
  console.log(Array.isArray(numbers)); //* true
}

//? join: array to string

//* SYNTAX: array.join(joiner/or empty)

{
  const numbers = [1, 2, 3, 4, 5];
  console.log(numbers.join()); //* 1,2,3,4,5
  console.log(numbers.join(", ")); //* 1, 2, 3, 4, 5
  console.log(numbers.join("-")); //* 1-2-3-4-5
}

//? slice: to cut out a multiple items in range

//* SYNTAX: array.slice(start, end(not include)) => end parameter not necessary.

{
  const numbers = [1, 2, 3, 4, 5];
  console.log(numbers.slice()); //* copies all item
}

//? Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.

//** SYNTAX: array.splice(start, times, newElements) */

{
  const numbers = [1, 2, 3, 4, 5];
  numbers.splice(0, 5); //* Start from index 0, delete 5 items
  console.log(numbers);
}
{
  const numbers = [1, 2, 3, 4, 5];
  numbers.splice(3, 2, 6, 7); //* Start from index 3, delete 2 items, add 6 and 7
  console.log(numbers);
}

//! Adding Item to an Array

//? push: add to the end. ***SYNTAX***: array.push("new item")

{
  const numbers = [1, 2, 3, 4, 5];
  numbers.push(6);
  console.log(numbers);
}

//? unshift: add to the beginning. ***SYNTAX***: array.unshift(times)

{
  const numbers = [2, 3, 4, 5];
  numbers.unshift(1); //* add 1 item
  console.log(numbers);
}

//! Removing an element

//? pop: remove from end. ***SYNTAX***: array.pop()

{
  const numbers = [1, 2, 3, 4, 5, "a"];
  numbers.pop();
  console.log(numbers);
}

//? shift: remove from beginning. ***SYNTAX***: array.shift()

{
  const numbers = ["a", 1, 2, 3, 4, 5];
  numbers.shift();
  console.log(numbers);
}

//! REVERSE and SORT

{
  //? Reverse: array.reverse()
  const numbers = [1, 2, 3, 4, 5];
  numbers.reverse();
  console.log(numbers);
}

{
  //? Sort: array.sort()
  const numbers = [9, 3, 5, 1, 2, 4, 6, 8, 7];
  numbers.sort(); //* Numeric: min to max
  console.log(numbers);

  const letters = ["g", "a", "c", "b", "d", "f", "e"];
  letters.sort(); //* Alphabetical order
  console.log(letters);
}

{
  //? Sort for multi-digit numbers

  const numbers = [10, 15, 1200, 121, 454, 204, 23, 11, 576];
  console.log(numbers.sort()); // [10, 11, 1200, 121, 15, 204, 23, 454, 576]

  numbers.sort((a, b) => a - b); //* min to max
  console.log(numbers);

  numbers.sort((a, b) => b - a); //* max to min
  console.log(numbers);
}
