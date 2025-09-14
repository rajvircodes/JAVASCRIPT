// Logical Operators in JavaScript

let isLoggedIn = true;
let hasPermission = false;

console.log("AND (&&):", isLoggedIn && hasPermission); // false
console.log("OR (||):", isLoggedIn || hasPermission);  // true
console.log("NOT (!):", !isLoggedIn);                  // false

// Example: simple access control
if (isLoggedIn && hasPermission) {
  console.log("Access granted ✅");
} else {
  console.log("Access denied ❌");
}
