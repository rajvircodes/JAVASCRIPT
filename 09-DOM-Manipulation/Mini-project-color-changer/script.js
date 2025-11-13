// Color Changer App - DOM Practice

// Select elements
const btn = document.getElementById("changeColorBtn");
const box = document.getElementById("colorBox");

// Function to generate random hex color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Event listener
btn.addEventListener("click", () => {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  box.textContent = newColor;
  box.style.backgroundColor = newColor;
});
