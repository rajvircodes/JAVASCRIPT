// Data Type in JavaScript

// 1. Primitive Data Type
console.log("==============Primitive Data Types==============");

let str = "Hello Js"        // String
let num = 100;              // Number
let isLearning = true;      // Boolean
let notDefined;             // undefined
let emptyValue = null;      // Null 
let bigNum = 12345678901234567890n // BigInt
let uniqueId = Symbol       // Symbol


console.log("String:", str);
console.log("Number:", num);
console.log("Boolean:", isLearning);
console.log("Undefined:", notDefined);
console.log("Null:", emptyValue);
console.log("BigIng:",BigInt);
console.log("Symbol:",Symbol);

// 2.Non-Primitive (Reference) Data Types
console.log(" ==============Non-Primitive Data Types==============");

let arr = [1,2,3,4];                    //Array 
let obj = {name: "Rajvirsinh", age:22} //Object
let func = function(){ return "Hello Function";}; // Function

console.log("Array:", arr);
console.log("Object:", obj);
console.log("Function:",func());