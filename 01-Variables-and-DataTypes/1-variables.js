// Variables in JavaScript

// 1. Using var (old way - function scoped)
console.log("=============Data Types=============");

var name = "Rajvirsinh";
console.log("Using var:", name);

// 2. Using let (block scoped - preferred way)
let age = 22;
console.log("Using let:", age);

// 3. Using const (cannot be reassigned)
const country = "India";
console.log("Using const:", country);

// Re-declaration vs Re-assignment
var a = 10;
var a = 20; // allowed with var
console.log("Re-declared var:", a);

let b = 30;
// let b = 40;  Not allowed
b = 40; //  allowed (re-assignment)
console.log("Re-assigned let:", b);

const c = 50;
// c = 60;  Not allowed
console.log("Const remains same:", c);
