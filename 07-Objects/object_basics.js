// Object Basics

// Creating an object
const person = {
  name: "Rajvir",
  age: 22,
  city: "Surat"
};

console.log("Person:", person);
console.log("Name:", person.name);
console.log("Age:", person["age"]);

// Adding new property
person.country = "India";
console.log("After adding country:", person);

// Deleting a property
delete person.city;
console.log("After deleting city:", person);
