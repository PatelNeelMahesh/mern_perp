// Strings: Textual data enclosed in single or double quotes
const name = "Aisha";
const greeting = 'Hello, ' + name;
console.log(greeting); // Output: Hello, Aisha

// Numbers: Numeric data, including integers and floating-point numbers
const age = 25;
const height = 5.9;
console.log(age); // Output: 25
console.log(height); // Output: 5.9

// Booleans: Represents true or false values
const isStudent = true;
const hasJob = false;
console.log(isStudent); // Output: true
console.log(hasJob); // Output: false

// Undefined: Represents a variable that has been declared but hasn't been assigned a value
let city;
console.log(city); // Output: undefined

// Null: Represents the intentional absence of any value
const phoneNumber = null;
console.log(phoneNumber); // Output: null

// Arrays: Ordered collections of values, enclosed in square brackets
const fruits = ["apple", "banana", "orange"];
console.log(fruits[1]); // Output: banana

// Objects: Collections of key-value pairs, enclosed in curly braces
const person = {
  firstName: "Rahul",
  lastName: "Kumar",
  age: 30,
};
console.log(person.firstName); // Output: Rahul

// Functions: Reusable blocks of code
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Priya")); // Output: Hello, Priya
