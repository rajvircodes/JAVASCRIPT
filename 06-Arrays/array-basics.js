// Array Basics

let fruits = ["apple", "banana", "cherry"];
console.log("Fruits:",fruits);
console.log("First fruits:",fruits[0]);
console.log("Length:",fruits.length);


//Adding and removing 

fruits.push("Orange"); //add at end
fruits.unshift("Grapes");
console.log("After adding",fruits);


fruits.pop() //remove last
fruits.shift() //remove first
console.log("After removing",fruits);

