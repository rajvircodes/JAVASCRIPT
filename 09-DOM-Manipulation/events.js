// DOM Events

// Selecting button
const btn = document.getElementById("clickBtn");

// Event Listener
btn.addEventListener("click", () => {
  alert("Button Clicked! 🚀");
});

// Mouse events
btn.addEventListener("mouseover", () => {
  btn.style.backgroundColor = "green";
});

btn.addEventListener("mouseout", () => {
  btn.style.backgroundColor = "";
});

// Keyboard event example
document.addEventListener("keydown", (event) => {
  console.log("Key pressed:", event.key);
});
