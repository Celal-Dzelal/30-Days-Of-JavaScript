//! --------------------------- LEVEL 1 ---------------------------

//! 1. Declare a function fullName and it print out your full name.

{
  function fullName() {
    let firstName = "Dzelal";
    let secondName = "Velislav";
    let lastName = "Smajevic";
    console.log(`${firstName} ${secondName} ${lastName}`);
  }
  fullName();
}

{
  function fullName(firstName, secondName, lastName) {
    return `${firstName} ${secondName} ${lastName}`;
  }
  console.log(fullName("Dzelal", "Velislav", "Smajevic"));
}

{
  const fullName = (firstName, secondName, lastName) =>
    `${firstName} ${secondName} ${lastName}`;
  console.log(fullName("Dzelal", "Velislav", "Smajevic"));
}

//! 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

{
  const fullName = (firstName, lastName) => `${firstName} ${lastName}`;
  console.log(fullName("Dzelal", "Smajevic"));
}

{
  function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
  console.log(fullName("Dzelal", "Smajevic"));
}

//! 3. Declare a function addNumbers and it takes two two parameters and it returns sum.

{
  function addNumbers(x, y) {
    return x + y;
  }
  console.log(addNumbers(2, 4));
}

{
  const addNumbers = (x, y) => x + y;
  console.log(addNumbers(3, 5));
}

//! 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

{
  function areaOfRectangle(length, width) {
    return length * width;
  }
  console.log(areaOfRectangle(5, 10));
}

{
  const areaOfRectangle = (x, y) => x * y;
  console.log(areaOfRectangle(4, 6));
}

//! 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

{
  function perimeterOfRectangle(length, width) {
    return `Perimeter of Rectangle: ${(length + width) * 2}`;
  }
  console.log(perimeterOfRectangle(6, 7));
}

{
  const perimeterOfRectangle = (length, width) =>
    `Perimeter of Rectangle: ${(length + width) * 2}`;
  console.log(perimeterOfRectangle(6, 7));
}

{
  function perimeterOfRectangle() {
    let width = 6;
    let length = 7;
    return `Perimeter of Rectangle: ${(length + width) * 2}`;
  }
  console.log(perimeterOfRectangle());
}

//! 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

{
  function volumeOfRectPrism(a, b, c) {
    return `Volume of Rectangular Prism: ${a * b * c}`;
  }
  console.log(volumeOfRectPrism(2, 3, 4));
}

{
  const volumeOfRectPrism = (a, b, c) =>
    `Volume of Rectangular Prism: ${a * b * c}`;
  console.log(volumeOfRectPrism(3, 4, 5));
}

//! 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

{
  const areaOfCircle = (r) => `Area of Circle: ${Math.PI * r ** 2} `;
  console.log(areaOfCircle(5));
}

{
  function areaOfCircle(r) {
    return `Area of Circle: ${Math.PI * r ** 2}`;
  }
  console.log(areaOfCircle(5));
}

//! 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

{
  const circumOfCircle = (r) => `Circumference of Circle: ${2 * Math.PI * r}`;
  console.log(circumOfCircle(4));
}

{
  function circumOfCircle(r) {
    return `Circumference of Circle: ${2 * Math.PI * r}`;
  }
  console.log(circumOfCircle(4));
}

//! 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

{
  function density(mass, volume) {
    return `Density of a substance: ${mass / volume}`;
  }
  console.log(density(50, 4));
}

{
  const density = (mass, volume) => `Density of a substance: ${mass / volume}`;
  console.log(density(50, 4));
}

//! 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

{
  const speed = (totalDistance, totalTime) =>
    `Speed: ${totalDistance / totalTime} km/sa`;
  console.log(speed(300, 2));
}
{
  function speed(totalDistance, totalTime) {
    return `Speed: ${totalDistance / totalTime} km/sa`;
  }
  console.log(speed(300, 2));
}

//*
console.clear();
//*

//! 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

{
  function weight(mass, gravity) {
    return `Weight: ${mass * gravity}`;
  }
  console.log(weight(10, 8));
}

{
  const weight = (mass, gravity) => `Weight: ${mass * gravity}`;
  console.log(weight(10, 8));
}

//! Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

{
  function convertCelsiusToFahrenheit(celcius) {
    return `${celcius} celcius is ${(celcius * 9) / 5 + 32} fahrenheit.`;
  }
  console.log(convertCelsiusToFahrenheit(35));
}

{
  const convertCelsiusToFahrenheit = (celcius) =>
    `${celcius} celcius is ${(celcius * 9) / 5 + 32} fahrenheit.`;
  console.log(convertCelsiusToFahrenheit(35));
}

//! Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

//* The same groups apply to both men and women.
//* Underweight: BMI is less than 18.5
//* Normal weight: BMI is 18.5 to 24.9
//* Overweight: BMI is 25 to 29.9
//* Obese: BMI is 30 or more

{
  function BMI(weight, height) {
    const squareHeight = Math.pow(height, 2);
    const result = (weight / squareHeight).toFixed(2);

    if (result < 18.5) {
      console.log("Underweight");
    } else if (result >= 18.5 && result <= 24.9) {
      console.log("Normal Weight");
    } else if (result >= 25 && result <= 29.9) {
      console.log("Overweight");
    } else {
      console.log("Obese");
    }
    return result;
  }
  console.log(BMI(89, 1.82));
}

{
  const bmi = (weight, height) => {
    const squareHeight = Math.pow(height, 2);
    const result = (weight / squareHeight).toFixed(2);
    const obesityControl =
      result < 18.5
        ? "Underweight"
        : result >= 18.5 && result <= 24.9
        ? "Normal Weight"
        : result >= 25 && result <= 29.9
        ? "Overweight"
        : "Obese";
    return `Your BMI: ${result}, Your Obesity Control: ${obesityControl}`;
  };
  console.log(bmi(89, 1.82));
}

//! 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

{
  function checkSeason(month) {
    const autumn = ["september", "october", "november"];
    const winter = ["december", "january", "february"];
    const spring = ["march", "april", "may"];
    const summer = ["june", "july", "august"];

    const season =
      autumn.includes(`${month}`.toLowerCase()) === true
        ? "Season is Autumn"
        : winter.includes(`${month}`.toLowerCase()) === true
        ? "Season is Winter"
        : spring.includes(`${month}`.toLowerCase()) === true
        ? "Season is Spring"
        : summer.includes(`${month}`.toLowerCase()) === true
        ? "Season is Summer"
        : "Invalid Entry";

    return season;
  }
  console.log(checkSeason("june"));
}

{
  const season = (month) => {
    const autumn = ["september", "october", "november"];
    const winter = ["december", "january", "february"];
    const spring = ["march", "april", "may"];
    const summer = ["june", "july", "august"];

    const seasonResult =
      autumn.includes(`${month}`.toLowerCase()) === true
        ? "Season is Autumn"
        : winter.includes(`${month}`.toLowerCase()) === true
        ? "Season is Winter"
        : spring.includes(`${month}`.toLowerCase()) === true
        ? "Season is Spring"
        : summer.includes(`${month}`.toLowerCase()) === true
        ? "Season is Summer"
        : "Invalid Entry";

    return seasonResult;
  };
  console.log(season("april"));
}

{
  function checkSeason(month) {
    const seasons = {
      autumn: ["september", "october", "november"],
      winter: ["december", "january", "february"],
      spring: ["march", "april", "may"],
      summer: ["june", "july", "august"],
    };

    const normalizedMonth = month.toLowerCase();

    for (const [season, months] of Object.entries(seasons)) {
      if (months.includes(normalizedMonth)) {
        return `Season is ${season.charAt(0).toUpperCase() + season.slice(1)}`;
      }
    }
    return "Invalid Entry";
  }
  console.log(checkSeason("april"));
}

//! Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

{
  function findMax(x, y, z) {
    if (y > x && y > z) {
      maxNum = y;
    } else if (z > y && z > x) {
      maxNum = z;
    } else {
      maxNum = x;
    }
    return `Maximum Number is ${maxNum}`;
  }
  console.log(findMax(19, 110, 101));
}

{
  const findMax = (x, y, z) => {
    let numbers = [x, y, z];
    let maxNum = numbers[0];
    for (const num of numbers) {
      if (num > maxNum) {
        maxNum = num;
      }
    }
    return `Maximum Number is ${maxNum}`;
  };
  console.log(findMax(19, 110, 101));
}

{
  const findMax = (x, y, z) => {
    const maxNum = x > y ? (x > z ? x : z) : y > z ? y : z;
    return `Maximum Number is ${maxNum}`;
  };
  console.log(findMax(19, 110, 101));
}
//*
console.clear();
//*

//! --------------------------- LEVEL 2 ---------------------------

//! 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

{
  function solveLinEquation(x, y) {
    const result = 2 * x + 3 * y + -6;
    return result;
  }
  console.log(solveLinEquation(1, 2));
}

{
  function solveLinEquation(a, b, c, x, y) {
    const result = a * x + b * y + c;
    return `The result of ${a}x + ${b}y + ${c} = 0 is: ${result}`;
  }
  console.log(solveLinEquation(2, 3, -6, 1, 2));
}

{
  const solveLinEquation = (a, b, c, x, y) =>
    `The result of ${a}x + ${b}y + ${c} = 0 is: ${a * x + b * y + c}`;
  console.log(solveLinEquation(2, 3, -6, 1, 2));
}

//! 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

{
  function solveQuadEquation(a, b, c) {
    let discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
      let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return [root1, root2];
    } else if (discriminant === 0) {
      let root = -b / (2 * a);
      return [root];
    } else {
      return null;
    }
  }
  console.log(solveQuadEquation(1, -3, 2));
}

//! 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

{
  function printArray(array) {
    array.forEach(function (element) {
      console.log(element);
    });
  }
  const numbers = [1, 2, 3, 4, 5];
  printArray(numbers);
}

{
  const printArray = (array) => {
    for (const element of array) {
      console.log(element);
    }
  };
  const numbers = [1, 2, 3, 4, 5];
  printArray(numbers);
}

//! 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

{
  function showDateTime(year, month, day, hours, minutes) {
    const specificDate = new Date(
      year,
      month - 1,
      day,
      hours,
      minutes
    ).toLocaleString("en-GB");
    return specificDate;
  }
  console.log(showDateTime(2020, 1, 8, 4, 8));
}

{
  const showDateTime = (year, month, day, hours, minutes) => {
    return new Date(year, month - 1, day, hours, minutes).toLocaleString(
      "en-GB"
    );
  };
  console.log(showDateTime(2020, 1, 8, 4, 8));
}

//! 5. Declare a function name swapValues. This function swaps value of x to y.

{
  function swapValues(x, y) {
    console.log(`x = ${x}, y = ${y}`);
    let temp = x;
    x = y;
    y = temp;
    return `x = ${x}, y = ${y}`;
  }
  console.log(swapValues(2, 4));
}

{
  const swapValues = (x, y) => {
    console.log(`Before Swap
  x = ${x}, y = ${y}`);
    let temp = x;
    x = y;
    y = temp;
    return `After Swap
  x = ${x}, y = ${y}`;
  };
  console.log(swapValues(2, 4));
}

{
  const swapValues = (x, y) => {
    console.log(`Before Swap
  x = ${x}, y = ${y}`);
    [x, y] = [y, x];
    return `After Swap
  x = ${x}, y = ${y}`;
  };
  console.log(swapValues(2, 4));
}

//! 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

{
  function reverseArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      console.log(array[i]);
    }
  }
  const numbers = [1, 2, 3, 4, 5];
  reverseArray(numbers);
}

{
  const reverseArray = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
      console.log(array[i]);
    }
  };
  const numbers = [1, 2, 3, 4, 5];
  reverseArray(numbers);
}

//! 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

{
  function capitalizeArray(array) {
    let capitalizedarray = [];
    for (const element of array) {
      let capitalizeElement =
        element.charAt(0).toUpperCase() + element.slice(1);
      capitalizedarray.push(capitalizeElement);
    }
    console.log(capitalizedarray);
  }
  let newArray = ["dzelal", "velislav", "zmajevic"];
  capitalizeArray(newArray);
}

{
  const capitalizeArray = (array) => {
    let capitalizedarray = [];
    array.forEach((element) => {
      let capitalizeElement =
        element.charAt(0).toUpperCase() + element.slice(1);
      capitalizedarray.push(capitalizeElement);
    });
    return capitalizedarray;
  };
  let newArray = ["dzelal", "velislav", "zmajevic"];
  console.log(capitalizeArray(newArray));
}

{
  const capitalizeArray = (array) =>
    array.map((element) => element.charAt(0).toUpperCase() + element.slice(1));
  let newArray = ["dzelal", "velislav", "zmajevic"];
  console.log(capitalizeArray(newArray));
}

//! 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

{
  const itemArray = [];
  function addItem(item) {
    itemArray.push(item);
    return itemArray;
  }
  console.log(addItem("Apple"));
  console.log(addItem("Banana"));
  console.log(addItem("Pear"));
}

{
  const itemArray = [];
  const addItem = (item) => {
    itemArray.push(item);
    return itemArray;
  };
  console.log(addItem("Apple"));
  console.log(addItem("Banana"));
  console.log(addItem("Pear"));
}

{
  const addItem = (() => {
    const itemArray = [];
    return (item) => {
      itemArray.push(item);
      return itemArray;
    };
  })();
  console.log(addItem("Apple"));
  console.log(addItem("Banana"));
  console.log(addItem("Pear"));
}

//! 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  function removeItem(index) {
    numbers.splice(index, 1);
    console.log(numbers);
  }
  removeItem(1);
  removeItem(3);
}

{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const removeItem = (index) => {
    numbers.splice(index, 1);
    console.log(numbers);
  };
  removeItem(1);
  removeItem(3);
}

//! 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

{
  function sumOfNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    console.log(sum);
  }
  sumOfNumbers(100);
}

{
  const sumOfNumbers = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    console.log(sum);
  };
  sumOfNumbers(100);
}

//*
console.clear();
//*

//! 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

{
  function sumOfOdds(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      if (i % 2 != 0) {
        sum += i;
      }
    }
    console.log(sum);
  }
  sumOfOdds(100);
}

{
  const sumOfOdds = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      i % 2 != 0 ? (sum += i) : null;
    }
    console.log(sum);
  };
  sumOfOdds(100);
}

{
  const sumOfOdds = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i += 2) {
      sum += i;
    }
    console.log(sum);
  };
  sumOfOdds(100);
}

//! 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

{
  const sumOfEven = (n) => {
    let sum = 0;
    for (let i = 0; i <= n; i += 2) {
      sum += i;
    }
    console.log(sum);
  };
  sumOfEven(100);
}

//! 13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

{
  const evensAndOdds = (n) => {
    let evens = 0;
    let odds = 0;
    for (let i = 0; i <= n; i++) {
      i % 2 === 0 ? evens++ : odds++;
    }
    console.log(`Number of Evens: ${evens}`);
    console.log(`Number of Odds: ${odds}`);
  };
  evensAndOdds(100);
}

//! 14. Write a function which takes any number of arguments and return the sum of the arguments

{
  function sumOfArguments(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
      sum += args[i];
    }
    return sum;
  }
  console.log(sumOfArguments(1, 2, 3, 4));
}

//! 15. Write a function which generates a randomUserIp.

{
  function randomUserIp() {
    const firstPart = Math.floor(Math.random() * 255) + 1;
    const secondPart = Math.floor(Math.random() * 255) + 1;
    const thirdPart = Math.floor(Math.random() * 255) + 1;
    const lastPart = Math.floor(Math.random() * 255) + 1;
    const ipArray = [];
    ipArray.push(firstPart);
    ipArray.push(secondPart);
    ipArray.push(thirdPart);
    ipArray.push(lastPart);
    const ip = ipArray.join(".");
    console.log(`IP ADDRESS:
${ip}`);
  }
  randomUserIp();
}

{
  function randomUserIp() {
    const ipArray = [];
    for (let i = 0; i <= 3; i++) {
      let part = Math.floor(Math.random() * 255) + 1;
      ipArray.push(part);
    }
    const ip = ipArray.join(".");
    console.log(`IP ADDRESS:
${ip}`);
  }
  randomUserIp();
}

//! 16. Write a function which generates a randomMacAddress

{
  const randomMacAddress = () => {
    const macArray = [];
    for (let i = 0; i <= 5; i++) {
      let part = (Math.floor(Math.random() * 255) + 1)
        .toString(16)
        .padStart(2, "0");
      macArray.push(part);
    }
    const mac = macArray.join(":");
    console.log(`MAC ADDRESS:
${mac}`);
  };
  randomMacAddress();
}

{
  const randomMacAddress = () => {
    let macAdd = (Math.floor(Math.random() * 999999999999) + 1)
      .toString(16)
      .padStart(12, "0")
      .split("");
    let macAddress = `${macAdd[0] + macAdd[1]}:${macAdd[2] + macAdd[3]}:${
      macAdd[4] + macAdd[5]
    }:${macAdd[6] + macAdd[7]}:${macAdd[8] + macAdd[9]}:${
      macAdd[10] + macAdd[11]
    }`;
    console.log(macAddress);
  };
  randomMacAddress();
}

//! 17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

{
  const randomHexaNumberGenerator = () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomHexaNumberGenerator());
}

//! 18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

{
  const userIdGenerator = () => {
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    let charactersLength = characters.length;
    for (let i = 0; i < 7; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log(result);
  };
  userIdGenerator();
}

//*
console.clear();
//*

//! --------------------------- LEVEL 3 ---------------------------
