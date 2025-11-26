// finally & throw keyword

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero! ❌"); // custom error
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (err) {
    console.log("Caught error:", err.message);
} finally {
    console.log("This will always run (finally block).");
}
