// Object Methods

const user = {
  name: "Ketan",
  age: 21,
  greet() {
    console.log(`Hello, ${this.name}!`);
  },
  getBirthYear() {
    return 2025 - this.age;
  }
};

user.greet();
console.log("Birth Year:", user.getBirthYear());

// Object utility methods
console.log("Keys:", Object.keys(user));
console.log("Values:", Object.values(user));
console.log("Entries:", Object.entries(user));
