// The 'this' keyword in JavaScript

const student = {
  name: "Aniket",
  subject: "JavaScript",
  showInfo() {
    console.log(`${this.name} is learning ${this.subject}.`);
  }
};

student.showInfo();

// 'this' in global scope (Node.js)
console.log("Global this:", this);

// 'this' inside function (non-arrow)
function demo() {
  console.log("Inside function:", this);
}
demo();

// 'this' inside arrow function
const demoArrow = () => {
  console.log("Inside arrow function:", this);
};
demoArrow();
