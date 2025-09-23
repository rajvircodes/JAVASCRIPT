// Parameters and Return

function welcom(name = 'Guest'){
    return `Welcome ${name}!`
}

console.log(welcom());
console.log(welcom("Rajvir"));

function sum(a, b){
    return a + b;
}

console.log("10 + 5 =",sum(10,5));


function checkAge(age){
    return age < 18 ? "Minor" : "Adult"
}

console.log(checkAge(18));
console.log(checkAge(11));
