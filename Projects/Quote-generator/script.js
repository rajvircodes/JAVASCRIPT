const factText = document.getElementById("fact-text");
const generateBtn = document.getElementById("generate-btn");

async function generateFact() {
  try {
    factText.textContent = "Loading fact...";
    const response = await fetch(
      "https://uselessfacts.jsph.pl/random.json?language=en"
    );
    const data = await response.json();
    factText.textContent = data.text;
  } catch (error) {
    factText.textContent = "Error loading fact 😞";
    console.log(error);
  }
}

generateBtn.addEventListener("click", generateFact);
