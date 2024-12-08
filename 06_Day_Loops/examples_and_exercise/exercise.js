//! Iterate 0 to 10 using for loop, do the same using while and do while loop

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

let i1 = 0;
do {
  console.log(i1);
  i1++;
} while (i1 <= 10);

//********************
console.clear();
//********************

//! Iterate 10 to 0 using for loop, do the same using while and do while loop

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

let i2 = 10;
while (i2 >= 0) {
  console.log(i2);
  i2--;
}

let i3 = 10;
do {
  console.log(i3);
  i3--;
} while (i3 >= 0);

//********************
console.clear();
//********************

//! Write a loop that makes the following pattern using console.log():

// #
// ##
// ###
// ####
// #####
// ######
// #######

for (let i = 1; i <= 7; i++) {
  console.log("#".repeat(i));
}

//********************
console.clear();
//********************

//! Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

//! Using loop print the following pattern

//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

for (let i = 0; i <= 10; i++) {
  console.log(`${i} ${i ** 2} ${i ** 3}`);
}

//! Use for loop to iterate from 0 to 100 and print only even numbers. Use for loop to iterate from 0 to 100 and print only odd numbers. Use for loop to iterate from 0 to 100 and print only prime numbers

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

for (let i = 0; i <= 100; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}

//********************
console.clear();
//********************

//! Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(sum);

//! Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

let sumOdd = 0;
let sumEven = 0;
let sumArray = [];
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    sumEven += i;
  } else {
    sumOdd += i;
  }
}
sumArray.push(sumEven, sumOdd);
console.log(sumArray);
console.log(sumEven);
console.log(sumOdd);

//! Develop a small script which generate array of 5 random numbers

let randomNum = [];
while (randomNum.length < 5) {
  let num = Math.floor(Math.random() * 100);
  if (!randomNum.includes(num)) {
    randomNum.push(num);
  }
}
console.log(randomNum);
