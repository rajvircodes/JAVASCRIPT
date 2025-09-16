// Different loops in JavaScript

// for loop
for (let i = 1; i <= 5; i++) {
  console.log("For loop:", i);
}

// while loop
let j = 1;
while (j <= 5) {
  console.log("While loop:", j);
  j++;
}

// do...while loop
let k = 1;
do {
  console.log("Do...while loop:", k);
  k++;
} while (k <= 5);

// for...of loop (used for arrays, strings)
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log("For...of loop:", fruit);
}

// for...in loop (used for objects)
let person = { name: "Raj", age: 22, city: "Surat" };
for (let key in person) {
  console.log("For...in loop:", key, ":", person[key]);
}
