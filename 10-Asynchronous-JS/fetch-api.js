// FETCH API – GET Request Example (Public API)

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => console.log("Fetched Data:", data))
    .catch((error) => console.log("Error:", error));
 

    let age = 20;
    if(age >= 18){
        console.log("you Can vote");
    }

    