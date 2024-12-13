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
