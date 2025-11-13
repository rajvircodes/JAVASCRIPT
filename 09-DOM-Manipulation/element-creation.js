// Creating and Modifying Elements

// Create new element
const newDiv = document.createElement("div");
newDiv.textContent = "Hello, I am a new DIV created by JavaScript!";
newDiv.style.backgroundColor = "lightblue";
newDiv.style.padding = "10px";

// Append to body
document.body.appendChild(newDiv);

// Modify existing elements
const title = document.querySelector("h1");
title.textContent = "Updated Title via JavaScript ✨";

// Remove element example
// title.remove();
