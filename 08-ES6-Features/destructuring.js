// Destructuring in JavaScript

// Array destructuring
const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log("First color:", first);
console.log("Second color:", second);

// Object destructuring
const person = { name: "Ketan", age: 21, city: "Ahmedabad" };
const { name, city } = person;
console.log(`Name: ${name}, City: ${city}`);

// Default values
const { country = "India" } = person;
console.log("Country:", country);
