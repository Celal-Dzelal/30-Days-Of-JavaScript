//! Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

{
  let age = Number(prompt("Enter Your Age:"));

  if (age >= 18) {
    console.log("You are old enough to drive");
  } else {
    console.log(`You must wait ${18 - age} years to drive`);
  }
}

//! Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

{
  let yourAge = Number(prompt("Enter Your Age:"));
  let myAge = 36;

  if (myAge > yourAge) {
    console.log(`I'm ${myAge - yourAge} years older than you.`);
  } else if (yourAge > myAge) {
    console.log(`You're ${yourAge - myAge} years older than me.`);
  } else {
    console.log("We're in the same age");
  }
}

//! If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways;
//? using if else
//? ternary operator.

{
  let a = Number(prompt("Enter a Number: "));
  let b = Number(prompt("Enter Another Number: "));

  let result =
    a > b
      ? console.log(`${a} is greater than ${b}`)
      : b > a
      ? console.log(`${b} is greater than ${a}`)
      : console.log("They're equal");
}

//! Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

{
  let number = Number(prompt("Enter a Number: "));

  if (number % 2 != 0) {
    console.log(`${number} is an odd number`);
  } else {
    console.log(`${number} is an even numbers`);
  }
}

//! Write a code which can give grades to students according to theirs scores (80-100 A, 70-79 B, 60-69 C, 50-59 D, 0-49 F)

{
  let score = Number(prompt("Enter Your Score"));

  let grade =
    score >= 80 && score <= 100
      ? "Your grade is A"
      : score >= 70 && score <= 79
      ? "Your grade is B"
      : score >= 60 && score <= 69
      ? "Your grade is C"
      : score >= 50 && score <= 59
      ? "Your grade is C"
      : score >= 0 && score <= 49
      ? "Your grade is D"
      : "Unvalid Score Entry";

  console.log(grade);
}

//! Check if the season is Autumn, Winter, Spring or Summer. If the user input is; September, October or November, the season is Autumn. December, January or February, the season is Winter. March, April or May, the season is Spring. June, July or August, the season is Summer.

{
  let month = prompt("Enter the Month:").toLowerCase();

  if (month === "september" || month === "october" || month === "november") {
    console.log("Season is Autumn");
  } else if (
    month === "december" ||
    month === "january" ||
    month === "february"
  ) {
    console.log("Season is Winter");
  } else if (month === "march" || month === "april" || month === "may") {
    console.log("The season is Spring");
  } else if (month === "june" || month === "july" || month === "august") {
    console.log("The season is Summer");
  } else {
    console.log("Invalid Entry");
  }
}

//! Check if a day is weekend day or a working day. Your script will take day as an input.

{
  let day = prompt("What is the day today ");
  let dayReal = day[0].toUpperCase() + day.slice(1).toLowerCase();
  let result =
    dayReal === "Monday" ||
    dayReal === "Tuesday" ||
    dayReal === "Wednesday" ||
    dayReal === "Thursday" ||
    dayReal === "Friday"
      ? `${dayReal} is a working day`
      : dayReal === "Saturday" || "Sunday"
      ? `${dayReal} is a weekend`
      : "Invalid Entry";
  console.log(result);
}

//! Write a program which tells the number of days in a month.

{
  let monthValue = prompt("Enter a Month: ");
  let monthReal =
    monthValue[0].toUpperCase() + monthValue.slice(1).toLowerCase();
  let result =
    monthReal === "April" ||
    monthReal === "June" ||
    monthReal === "September" ||
    monthReal === "November"
      ? `${monthReal} has 30 days`
      : monthReal === "January" ||
        monthReal === "March" ||
        monthReal === "May" ||
        monthReal === "July" ||
        monthReal === "August" ||
        monthReal === "October" ||
        monthReal === "December"
      ? `${monthReal} has 31 days`
      : monthReal === "February"
      ? `${monthReal} has 28 days`
      : "Invalid Entry";
  console.log(result);
}
