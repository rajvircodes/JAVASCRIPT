// Spread and Rest Operators

// Spread - expand arrays/objects
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const merged = [...arr1, ...arr2];
console.log("Merged Array:", merged);

// Spread in objects
const user = { name: "Aniket", age: 22 };
const updatedUser = { ...user, city: "Surat" };
console.log("Updated User:", updatedUser);

// Rest - collect remaining elements
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log("Sum:", sum(10, 20, 30, 40));

// Destructuring with rest
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log("First:", first);
console.log("Rest:", rest);
