// DOM Selectors

// Selecting by ID
const heading = document.getElementById("main-heading");
console.log("By ID:", heading);

// Selecting by Class
const items = document.getElementsByClassName("list-item");
console.log("By Class:", items);

// Selecting by Tag
const paragraphs = document.getElementsByTagName("p");
console.log("By Tag:", paragraphs);

// Using querySelector / querySelectorAll
const firstItem = document.querySelector(".list-item");
const allItems = document.querySelectorAll(".list-item");

console.log("Query Selector:", firstItem);
console.log("Query Selector All:", allItems);
