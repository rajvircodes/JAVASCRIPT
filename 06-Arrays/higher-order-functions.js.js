// Higher Order Functions on Arrays

let students = ["Raj", "Ketan", "Aniket", "Dharmesh"];

// forEach
students.forEach((s, i) => console.log(i, s));

// map
let uppercased = students.map(s => s.toUpperCase());
console.log("Uppercased:", uppercased);

// filter
let shortNames = students.filter(s => s.length <= 5);
console.log("Short Names:", shortNames);

// reduce
let totalLength = students.reduce((acc, s) => acc + s.length, 0);
console.log("Total Characters:", totalLength);

// some & every
console.log("Any name longer than 6?", students.some(s => s.length > 6));
console.log("All names longer than 2?", students.every(s => s.length > 2));
