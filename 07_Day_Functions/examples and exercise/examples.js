//! FUNCTION DECLARATION

/* function functionName() {
    code blocks
}
functionName()
*/

//? Function without Parameter

{
  function square() {
    let num = 2;
    let sq = num * num;
    console.log(sq);
  }
  square();
}

{
  function addThreeNumbers() {
    let numOne = 10;
    let numTwo = 20;
    let numThree = 30;
    let sum = numOne + numTwo + numThree;
    console.log(sum);
  }
  addThreeNumbers();
}

{
  function addOneToTen() {
    let sum = 0;
    for (let i = 0; i <= 10; i++) {
      sum += i;
    }
    console.log(sum);
  }
  addOneToTen();
}

//? Function Returning Value

{
  function addThreeNumbers() {
    let numOne = 10;
    let numTwo = 20;
    let numThree = 30;
    let sum = numOne + numTwo + numThree;
    console.log(sum);
    return sum;
  }
  addThreeNumbers();
}

//? Function with a parameter

//* One Parameter

/**
function functionName(parameter) {
    Code Block
}
functionName(parameter1) 
*/

{
  function perimeterOfSquare(x) {
    let perimeter = x ** 2;
    return perimeter;
  }
  console.log(perimeterOfSquare(10));
}

//* Two Parameters

/**
function functionName(parameter1, parameter2) {
    Code Block
}
functionName(parameter1, parameter2)
*/

{
  function areaOfRectangle(a, b) {
    let area = a * b;
    return area;
  }
  console.log(areaOfRectangle(5, 6));
}

//* Many Parameters

/** 
function functionName(parameter1, parameter2, parameter3, ...) {
  Code Block
}
functionName(parameter1, parameter2, parameter3, ...)
*/

{
  function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5];
  console.log(sumArray(numbers));
}

//! Unlimited number of parameters in regular function

{
  function sumAllNums() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }
  console.log(sumAllNums(1, 2, 3, 4));
  console.log(sumAllNums(5, 10, 15, 20, 25, 30, 35, 40, 45, 50));
}

//! Unlimited number of parameters in arrow function

{
  const sumAllNums = (...args) => {
    let sum = 0;
    for (const element of args) {
      sum += element;
    }
    return sum;
  };
  console.log(sumAllNums(1, 2, 3, 4));
  console.log(sumAllNums(5, 10, 15, 20, 25, 30, 35, 40, 45, 50));
}

//! Anonymous Functions

const anonymous = function () {
  console.log("my value is stored in anonymous");
};
console.log(anonymous);

//! Expression Functions

const square = function (n) {
  return n * n;
};
console.log(square(4));

//! Self Invoking Functions: Not store data

(function (n) {
  console.log(n * n);
})(2);

//! Arrow Function

const addTwo = (arr) => {
  const newArray = [];
  for (const num of arr) {
    newArray.push(num + 2);
  }
  return newArray;
};
const numbers = [1, 2, 3, 4, 5];
console.log(addTwo(numbers));

//* Example 2

const allUpper = (fullName) => {
  const upperFull = [];
  for (const element of fullName) {
    upperFull.push(element.toUpperCase());
  }
  return upperFull;
};
const fullName = ["dzelal", "velislav", "smajevic"];
console.log(allUpper(fullName));

//! Function with default parameters

function introText(name = "Dzelal") {
  let message = `${name} is a Fullstack Developer`;
  return message;
}
console.log(introText());
console.log(introText("Velislav"));
