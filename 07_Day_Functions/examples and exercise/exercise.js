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
