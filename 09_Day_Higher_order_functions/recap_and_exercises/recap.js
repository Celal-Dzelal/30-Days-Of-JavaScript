//! HIGHER ORDER FUNCTION: are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.

//? Callback: is a function which can be passed as parameter to other function.

{
  const callback = (n) => {
    return n ** 2;
  };

  function cube(callback, n) {
    return callback(n) * n;
  }

  console.log(cube(callback, 3));
}

//* Example

{
  function firstName() {
    return "Dzelal";
  }

  function name(firstName) {
    return firstName + " " + "Velislav";
  }

  function fullName(name) {
    return name + " " + "Zmajevic";
  }

  console.log(fullName(name(firstName())));
}

//? Returning function: higher order functions return function as a value

{
  const higherOrder = (n) => {
    const secondOrder = (m) => {
      const thirdOrder = (t) => {
        return 2 * n + 3 * m + t;
      };
      return thirdOrder;
    };
    return secondOrder;
  };
  console.log(higherOrder(2)(3)(10));
}

//* Example: forEach method uses call back

{
  const numbers = [1, 2, 3, 4, 5];
  const sumArray = (arr) => {
    let sum = 0;
    const callback = function (element) {
      sum += element;
    };
    arr.forEach(callback);
    return sum;
  };
  console.log(sumArray(numbers));
}

//* Example

{
  const sumNumbers = () => {
    let sum = 0;
    let numbers = [];
    const callback = function (i) {
      sum += i;
    };
    for (let i = 0; i <= 100; i++) {
      numbers.push(i);
    }
    numbers.forEach(callback);
    return sum;
  };

  console.log(sumNumbers());
}

//! Setting Time: In JS we can execute some activities in a certain interval of time or we can schedule for some time to execute some activities.

//? Setting Interval using a setInterval function: In JS, we use setInterval higher order function to do some activity continuously with in some interval of time. The setInterval global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback will be allways called in that interval of mine.

/* 
function callback() {
    codes
}
setInterval(callback, duration)
*/

{
  function sayHello() {
    console.log("Hello");
  }
  //* setInterval(sayHello, 1000);
}

{
  let sum = 0;
  function unlimitedSum() {
    console.log((sum += 1));
  }
  //* setInterval(unlimitedSum, 1000);
}

//? Setting a time using a setTimeout: In JS, we use setTimeout higher order function to execute some action at some time in the future. The setTimeout global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback wait for that amount of time.

/*
function callback() {
  codes
}
setTimeout(callback, duration)
*/

{
  function sayHello() {
    console.log("Hello");
  }
  // setTimeout(sayHello, 2000);
}

{
  function square() {
    console.log(Math.pow(5, 2));
  }
  // setTimeout(square, 500);
}

//! FUNCTIONAL PROGRAMMING

//? forEach: Iterate an array elements. We use forEach only with arrays. It takes a callback function with elements, index parameter and array itself. The index and the array optional.

/* 
arr.forEach(function (element, index, arr){
  console.log(index, element, arr
)})

arr.forEach((element, index, arr) => {
  console.log(index, element, arr)
})

arr.forEach((element, index, arr) => console.log(index, element, arr))
*/

{
  let sum = 0;
  const numbers = [1, 2, 3, 4, 5];
  numbers.forEach((num) => (sum += num));
  console.log(sum);
}

{
  const countries = [
    "Bosnia-Herzegovina",
    "Germany",
    "Russia",
    "Croatia",
    "Albania",
  ];
  countries.forEach((element) => console.log(element.toUpperCase()));
}

{
  const fullName = ["dzelal", "velislav", "zmajevic"];
  fullName.forEach((element) =>
    console.log(element[0].toUpperCase() + element.slice(1))
  );
}

//? map: iterate an array elements and modify the array elements. It takes a callback function with elements, index, array parameter and return a new array.

/*
const modifiedArray = arr.map(function(element, index, arr) {
  return element
})
*/

{
  const numbers = [1, 2, 3, 4, 5];
  const numbersSquare = numbers.map((num) => num * num);
  console.log(numbersSquare);
}

{
  const names = ["dzelal", "velislav", "zmajevic"];
  const upperNames = names.map((name) => name.toUpperCase());
  console.log(upperNames);

  const firstCapitalNames = upperNames.map(
    (n) => n[0] + n.slice(1).toLowerCase()
  );
  console.log(firstCapitalNames);
}

{
  const countries = [
    "Bosnia-Herzegovina",
    "Germany",
    "Russia",
    "Croatia",
    "Albania",
  ];
  const upperCountries = countries.map((c) => {
    return c.toUpperCase();
  });
  console.log(upperCountries);

  const shortHandCountries = upperCountries.map((c) => {
    return c.slice(0, 3);
  });
  console.log(shortHandCountries);
}

//? filter: Filter out items which full filtering conditions and return a new array

{
  const countries = [
    "Bosnia-Herzegovina",
    "Germany",
    "Russia",
    "Croatia",
    "Albania",
    "Ireland",
    "Finland",
    "Netherland",
  ];

  const countriesContainingLand = countries.filter((c) => c.includes("land"));
  console.log(countriesContainingLand);

  const countriesNotContainingLand = countries.filter(
    (c) => !c.includes("land")
  );
  console.log(countriesNotContainingLand);

  const countriesLengthFive = countries.filter((c) => c.length >= 8);
  console.log(countriesLengthFive);
}

{
  const scores = [
    { name: "Dzelal", score: 75 },
    { name: "Stefan", score: 70 },
    { name: "Dusan", score: 95 },
    { name: "Dzeko", score: 85 },
  ];
  const scoreGreaterEqualEighty = scores.filter((s) => s.score >= 80);
  console.log(scoreGreaterEqualEighty);

  const nameStartsWithD = scores.filter((n) => n.name.startsWith("D"));
  console.log(nameStartsWithD);
}

//? reduce: takes a callback function. The callback function takes accumulator, current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then JS will throw an error.

/*
arr.reduce((acc, cur) => {
  some operations
  return
  }, initialValue)
*/

{
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  console.log(sum);
}

//? every: check if all the elements are similar in one aspect. It returns boolean

{
  const names = ["Dzelal", "Velislav", "Zmajevic"];
  const areAllStr = names.every((n) => typeof n === "string");
  console.log(areAllStr);
}

{
  const array = [1, 2, 3, 4, true, 5, 6, 7, 8];
  const areAllNumber = array.every((num) => typeof num === "number");
  console.log(areAllNumber);
}

//? find: return the first element which satisfies the condition

{
  const ages = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  const age = ages.find((age) => age > 20);
  console.log(age); // 25
}

{
  const names = [
    "Velislav",
    "Ivan",
    "Dzelal",
    "Tadic",
    "Dusan",
    "Dzeko",
    "Kostic",
    "Livakovic",
  ];

  const result = names.find((name) => name.startsWith("D"));
  console.log(result); // Dzelal
}

{
  const scores = [
    { name: "Dzelal", score: 75 },
    { name: "Stefan", score: 70 },
    { name: "Dusan", score: 95 },
    { name: "Dzeko", score: 85 },
  ];

  const score = scores.find((user) => user.score > 80);
  console.log(score);
}

//? findIndex: return the position of the first element which satisfies the condition

{
  const ages = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  const names = [
    "Velislav",
    "Ivan",
    "Dzelal",
    "Tadic",
    "Dusan",
    "Dzeko",
    "Kostic",
    "Livakovic",
  ];
  const scores = [
    { name: "Dzelal", score: 75 },
    { name: "Stefan", score: 70 },
    { name: "Dusan", score: 95 },
    { name: "Dzeko", score: 85 },
  ];

  const age = ages.findIndex((age) => age > 20);
  console.log(age); // 4 => 25

  const name = names.findIndex((name) => name.startsWith("D"));
  console.log(name); // 2 => Dzelal

  const score = scores.findIndex((user) => user.score > 80);
  console.log(score); // 2 => Dusan
}

//? some: check if some of the elements are similar in one aspect. It returns boolean

{
  const array1 = ["Dzelal", "Velislav", "Zmajevic", 36, true];
  const array2 = [1, 2, 3, 4, true, 5, 6, 7, 8];

  const someStr = array1.some((x) => typeof x === "string");
  console.log(someStr);

  const someBool = array2.some((x) => typeof x === "boolean");
  console.log(someBool);
}

//? sort: The sort methods arranges the array elements either ascending or descending order. By default, the sort() method sorts values as string. This works well for string array items but not for numbers. If number values are sorted as string and it give us wrong result. Sort method modify the original array. It is recommended to copy the original data before you start using sort method.

//** Sorting string values

{
  const names = [
    "Velislav",
    "Ivan",
    "Dzelal",
    "Tadic",
    "Dusan",
    "Dzeko",
    "Kostic",
    "Livakovic",
  ];

  console.log(names.sort());
}

//** Sorting numeric values

{
  const numbers = [2, 101, 111, 9.81, 2.45, 450, 1111];
  console.log(numbers.sort()); // [101, 111, 1111, 2, 2.45, 450, 9.81]
  numbers.sort(function (a, b) {
    return a - b;
  });
  console.log(numbers); // [2, 2.45, 9.81, 101, 111, 450, 1111]
}

//** Sorting Object Arrays

/*
objArr.sort(function (a, b) {
  if (a.key < b.key) return -1
  if (a.key > b.key) return 1
  return 0
})

OR

objArr.sort(function (a, b) {
  if (a['key'] < b['key']) return -1
  if (a['key'] > b['key']) return 1
  return 0
})
*/

{
  const scores = [
    { name: "Dzelal", score: 75 },
    { name: "Stefan", score: 70 },
    { name: "Dusan", score: 95 },
    { name: "Dzeko", score: 85 },
  ];

  scores.sort((a, b) => {
    if (a.score < b.score) return -1;
    if (a.score > b.score) return 1;
    return 0;
  });

  console.log(scores);
}

console.clear();

//! EXAMPLES

//? 1. Create a callback function and pass it as a parameter to another function. The callback function should print a message.

{
  const callback = () => {
    return "Hello";
  };
  function printConsole(callback) {
    return callback();
  }

  console.log(printConsole(callback));
}

//? 2. Write a function that takes a number. This function multiplies the number by two and returns the result using a callback.

{
  const callback = (n) => {
    return n * 2;
  };
  function multiplies(callback, n) {
    return callback(n);
  }
  console.log(multiplies(callback, 3));
}

//? 3. Write a function that takes an array as a parameter. This function should return the first element of the array using a callback.

{
  const callback = (array) => {
    return array;
  };
  function returnFirst(callback, array) {
    return callback(array)[0];
  }
  const array = [1, 2, 3, 4, 5];
  console.log(returnFirst(callback, array));
}

//? 4. Write a function that takes a string and converts it to uppercase using a callback.

{
  const callback = (text) => {
    return text.toUpperCase();
  };
  function upperText(callback, text) {
    return callback(text);
  }
  const text = "dzelal velislav zmajevic";
  console.log(upperText(callback, text));
}

//? 5. Write a function that takes two numbers. This function should return their sum using a callback.

{
  const callback = (x, y) => {
    return x + y;
  };
  function sum(callback, x, y) {
    return callback(x, y);
  }
  const x = 5;
  const y = 10;
  console.log(sum(callback, x, y));
}

//? 6.  Print each element of an array to the console using forEach.

{
  const numbers = [1, 2, 3, 4, 5];
  numbers.forEach((number) => console.log(number));
}

//? 7. Multiply each element of an array by 2 using forEach and print the results to the console.

{
  const numbers = [10, 20, 30, 40, 50];
  const multipliesByTwo = (arr) => {
    let newNumbers = [];
    const callback = function (element) {
      newNumbers.push(element * 2);
    };
    arr.forEach(callback);
    return newNumbers;
  };
  console.log(multipliesByTwo(numbers));
}

{
  const numbers = [10, 20, 30, 40, 50];
  numbers.forEach((num) => console.log(num * 2));
}

//? 8. Print the length of each element in an array using forEach (array contains strings).

{
  const fruits = ["apple", "banana", "cherry"];
  fruits.forEach((fruit) => console.log(`Fruit ${fruit}: ${fruit.length}`));
}

//? 9. Identify positive numbers in an array and print them using forEach.

{
  const numbers = [-5, 3, -1, 2, 7];
  numbers.forEach((num) => (num > 0 ? console.log(num) : null));
}

//? 10. Check each element of an array using forEach and print only the even numbers to the console.

{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  numbers.forEach((num) => (num % 2 === 0 ? console.log(num) : null));
}

//? 11. Print "Hello!" to the console after 3 seconds.

{
  function sayHello() {
    console.log("Hello!");
  }
  // setTimeout(sayHello, 3000);
}

//? 12. Show an alert with the message "Task completed!" after 2 seconds.

{
  function alertMessage() {
    alert("Task Completed!");
  }
  // setTimeout(alertMessage, 2000);
}

//? 13. Print a number by incrementing it by 2 after 4 seconds.

{
  let number = 0;
  setTimeout(() => {
    number += 2;
    // console.log(number);
  }, 4000);
}

//? 14. Print "Pong" message 5 times with an interval of 1 second.

{
  let count = 0;
  const interval = setInterval(() => {
    // console.log("pong");
    count++;
    if (count === 5) {
      clearInterval(interval);
    }
  }, 1000);
}

//? 15. Show an alert after 6 seconds and another alert after 3 seconds.

{
  setTimeout(() => {
    // alert("Alarm1");
  }, 6000);

  setTimeout(() => {
    // alert("Alarm2");
  }, 3000);
}

//? 16. Multiply each number in an array by 2 and create a new array.

{
  const numbers = [10, 20, 30, 40, 50];
  const newNumbers = numbers.map((num) => num * 2);
  console.log(newNumbers);
}

//? 17. Convert each string in an array to uppercase and create a new array.

{
  const names = ["Dzelal", "Velislav", "Zmajevic"];
  const upperNames = names.map((name) => name.toUpperCase());
  console.log(upperNames);
}

//? 18. Add each number to itself in an array and create a new array.

{
  const numbers = [10, 20, 30, 40, 50];
  const sumBySelf = numbers.map((num) => num + num);
  console.log(sumBySelf);
}

//? 19. Add 5 to each number in an array and create a new array.

{
  const numbers = [10, 20, 30, 40, 50];
  const plusByFive = numbers.map((num) => num + 5);
  console.log(plusByFive);
}

//? 20. Calculate the length of each element in an array and create a new array

{
  {
    const names = ["Dzelal", "Velislav", "Zmajevic"];
    const lengthOfNames = names.map((name) => name.length);
    console.log(lengthOfNames);
  }
}

//? 21. Select only the even numbers in an array and create a new array.

{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  console.log(evenNumbers);
}

//? 22. Select only the numbers greater than 5 in an array and create a new array.

{
  const numbers = [1, 3, 7, 10, 2, 6, 4, 9];
  const greaterFive = numbers.filter((num) => num > 5);
  console.log(greaterFive);
}

//? 23. Select only the words starting with "a" in an array and create a new array.

{
  const fruits = ["apple", "banana", "apricot", "grape", "avocado", "orange"];
  const fruitsStartWithA = fruits.filter((fruit) => fruit.startsWith("a"));
  console.log(fruitsStartWithA);
}

//? 24. Select only the numbers less than 10 in an array and create a new array.

{
  const numbers = [15, 8, 22, 3, 7, 9, 12];
  const lesserTen = numbers.filter((num) => num < 10);
  console.log(lesserTen);
}

//? 25. Select only the words with a length smaller than 5 in an array and create a new array

{
  const animals = ["cat", "elephant", "dog", "rabbit", "bat", "bird"];
  const lengthLesserFive = animals.filter((animal) => animal.length < 5);
  console.log(lengthLesserFive);
}

/*
arr.reduce((acc, cur) => {
  some operations
  return
  }, initialValue)
*/

//? 26. Use the reduce method to sum all the numbers in an array.

{
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce((acc, num) => (acc += num), 0);
  console.log(sum);
}

//? 27. Use the reduce method to calculate the total length of all the words in an array.

{
  const fruits = ["apple", "banana", "cherry"];
  const totalLength = fruits.reduce((acc, fruit) => (acc += fruit.length), 0);
  console.log(totalLength);
}

//? 28. Use the reduce method to multiply all the numbers in an array.

{
  const numbers = [2, 3, 4, 5];
  const multiplies = numbers.reduce((acc, num) => (acc *= num), 1);
  console.log(multiplies);
}

//? 29. Use the reduce method to find the largest number in an array.

{
  const numbers = [7, 5, 12, 9, 20, 15];
  const findMax = numbers.reduce(
    (acc, number) => (number > acc ? number : acc),
    0
  );
  console.log(findMax);
}

//? 30. Use the reduce method to sum only the even numbers in an array.

{
  const numbers = [1, 2, 3, 4, 5, 6];
  const evenSum = numbers.reduce(
    (acc, num) => (num % 2 === 0 ? acc + num : acc),
    0
  );
  console.log(evenSum);
}
