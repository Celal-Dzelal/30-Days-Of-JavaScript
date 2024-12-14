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
