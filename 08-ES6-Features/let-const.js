// let and const in JavaScript

let name = "Raj";
name = "Rajvir"; // reassign allowed
console.log("Using let:", name);

const age = 22;
// age = 23; ❌ Error: can't reassign const
console.log("Using const:", age);

// Block scope example
{
  let city = "Surat";
  const country = "India";
  console.log("Inside block:", city, country);
}
// console.log(city); // ❌ Not accessible outside block
