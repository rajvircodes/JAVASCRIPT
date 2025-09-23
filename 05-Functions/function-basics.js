// Function basics 

// Declaration 
function greet(){
    console.log("Hello from basic function !");
    
}

greet();

// Function with arguments ! 
function greetUser(name){
    console.log(`Hello ${name}!`);
    
}

greetUser("Rajvir");


// Function expression 
const add = function(a, b){
    return a + b; 
}
console.log("% + 3 = ", add(5, 3));
