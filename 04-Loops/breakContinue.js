// break and continue in JavaScript

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Breaking at i =", i);
    break; // exits loop completely
  }
  console.log("i =", i);
}

for (let j = 1; j <= 10; j++) {
  if (j % 2 === 0) {
    continue; // skips even numbers
  }
  console.log("Odd number:", j);
}
