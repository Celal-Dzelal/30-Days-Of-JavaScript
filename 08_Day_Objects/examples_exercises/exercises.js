//! EXERCISES: LEVEL 1

//? Create an empty object called dog

const dog = {};

//? Print the dog object on the console

console.log(dog);

//? Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof.

dog.name = "Voldermort";
dog.legs = 4;
dog.age = 3;
dog.color = "Black";
dog.bark = function () {
  return "Woof Woof";
};

//? Get name, legs, color, age and bark value from the dog object

console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog["age"]);
console.log(dog.bark());

//? Set new properties the dog object: breed, getDogInfo

dog.breed = "Siberian Wolf";
dog.getDogInfo = function () {
  return `The ${this.name} is a ${this.breed} and he is ${
    this.age
  } years old. His color is ${this.color}, he has ${
    this.legs
  }  legs and he barks like ${this.bark()}.`;
};
console.log(dog.getDogInfo());

//! EXERCISES: LEVEL 2

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

//? Find the person who has many skills in the users object.

function skillsNumber() {
  let maxUser = null;
  let maxSkill = 0;
  for (const user in users) {
    const skillsCounter = users[user].skills.length;
    if (skillsCounter > maxSkill) {
      maxSkill = skillsCounter;
      maxUser = user;
    }
  }
  console.log(maxUser, maxSkill);
}
skillsNumber();

//? Count logged in users, count users having greater than equal to 50 points from the following object.

function pointCount() {
  let limitPoint = 50;
  let finalists = [];
  for (const user in users) {
    const point = users[user].points;
    if (point >= limitPoint) {
      finalists.push({ user, point });
    }
  }
  console.log(finalists);
}
pointCount();

//? Find people who are MERN stack developer from the users object

function findMernDevelopers(users) {
  const mernDevelopers = [];
  for (const user in users) {
    const skills = users[user].skills;
    if (
      skills.includes("MongoDB") &&
      skills.includes("Express") &&
      skills.includes("React") &&
      skills.includes("Node")
    ) {
      mernDevelopers.push(user);
    }
  }
  return mernDevelopers;
}
const mernStackDevs = findMernDevelopers(users);
console.log("MERN Stack Geliştiricileri:", mernStackDevs);

//? Set your name in the users object without modifying the original users object

const copyUsers = Object.assign({}, users);
copyUsers.Dzelal = {};
copyUsers.Dzelal.email = "dzelal@zmajevic.com";
copyUsers.Dzelal.skills = ["HTML", "CSS", "JavaScript", "Pyhton"];
copyUsers.Dzelal.age = 36;
copyUsers.Dzelal.isLoggedIn = true;
copyUsers.Dzelal.points = 60;

console.log(copyUsers);

//? Get all keys or properties of users object

const allKeys = Object.keys(copyUsers);
console.log(allKeys);

for (const user in copyUsers) {
  const allKeys = Object.keys(copyUsers[user]);
  console.log(allKeys);
  break;
}

//? Get all the values of users object

const allValues = Object.values(copyUsers);
console.log(allValues);

for (const user in copyUsers) {
  const allValues = Object.values(copyUsers[user]);
  console.log(allValues);
}

//? Extra

const entries = Object.entries(copyUsers);
console.log(entries);

for (const user in copyUsers) {
  const entries = Object.entries(copyUsers[user]);
  console.log(entries);
}
