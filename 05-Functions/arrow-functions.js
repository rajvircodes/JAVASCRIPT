// Arrow Functions 

const sayHi = () => console.log("Hello from Arrow function !");

sayHi();

const multiply = (x, y) => x * y;
console.log("4 x 6 = ",multiply(4, 6)); 


const square = n => n * n; 
console.log("Square of 5 = ", square(5));

const createUser = (name,age) => ({name, age});
console.log( createUser("Rajvir", 22));


