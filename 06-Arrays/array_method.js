// Common Array Methods

let numbers = [1, 2, 3, 4, 5];

console.log("Join:", numbers.join(" - "));
console.log("Slice:", numbers.slice(1, 4));
console.log("Splice (remove):", numbers.splice(2, 1)); // remove 1 item at index 2
console.log("After splice:", numbers);

let doubled = numbers.map(n => n * 2);
console.log("Map:", doubled);

let evens = numbers.filter(n => n % 2 === 0);
console.log("Filter:", evens);

let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Reduce:", sum);
