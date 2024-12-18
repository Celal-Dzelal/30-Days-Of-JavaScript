//! Creating an Objecting with Values

const rectangle = {
  length: 20,
  width: 20,
};
console.log(rectangle);

const person = {
  firstName: "Dzelal",
  middleName: "Velislav",
  lastName: "Zmajevic",
  age: 36,
  country: "Bosnia Herzegovina",
  city: "Sarajevo",
  skills: ["HTML", "CSS", "JavaScript", "Pyhton"],
  isMarried: true,
  getSkills: function () {
    console.log(`${this.skills}`);
  },
};
console.log(person);

//! Getting Values from an Object

function getPersonFullName() {
  return `${person.firstName} ${person.middleName} ${person.lastName}`;
}
console.log(getPersonFullName());

//* Accessing values using "."

console.log(person.firstName);
console.log(person.country);
console.log(person.age);
console.log(person.getSkills());

//* Accessing values using square bracket and key name

console.log(person["middleName"]);
console.log(person["isMarried"]);
console.log(person["city"]);

//*

//! Setting new key for an Object

person.job = "Lecturer";
person.hasChild = true;
person.skills.push("SaSS");

console.log(person.job);
console.log(person.hasChild);
console.log(person.getSkills());

//! OBJECT METHODS

//? Object.assign: To copy an object without modifying the original object

const copyPerson = Object.assign({}, person);
console.log(copyPerson);

//? Object.keys: To get the keys or properties of an object as an array

const keys = Object.keys(copyPerson);
console.log(keys);

//? Object.values: To get values of an object as an array

const values = Object.values(copyPerson);
console.log(values);

//? Object.entries(): To get the keys and values in an array

const entries = Object.entries(copyPerson);
console.log(entries);
