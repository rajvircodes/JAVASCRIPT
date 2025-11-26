// try...catch in JavaScript

try {
    let num = 10;
    console.log(num.toUpperCase()); // ❌ number has no toUpperCase()
} catch (error) {
    console.log("Error caught:", error.message);
}

console.log("Code continues even after error...");
