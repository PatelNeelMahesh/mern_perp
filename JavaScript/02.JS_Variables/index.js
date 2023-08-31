var name = "name";
function hoisting(){
    console.log("Hoisting")
}
hoisting();
console.log(name);

// Declaring variables using different keywords
var name = "Rahul"; // Using 'var' to declare a variable
let age = 30; // Using 'let' to declare a variable
const isAdult = true; // Using 'const' to declare a constant variable

// Outputting variable values to the console
console.log(name); // Output: Rahul
console.log(age); // Output: 30
console.log(isAdult); // Output: true

// Updating variable values
name = "Priya"; // Updating the 'name' variable
age = 25; // Updating the 'age' variable

console.log(name); // Output: Priya
console.log(age); // Output: 25

// Using 'let' for block-scoped variables
function updateAge() {
  if (true) {
    let age = 50; // Using 'let' to declare a block-scoped variable
    console.log("Inside block:", age); // Output: Inside block: 50
  }
  console.log("Outside block:", age); // Output: Outside block: 25
}

updateAge();

// Defining a constant
const PI = 3.14; // Defining a constant 'PI'
console.log(PI); // Output: 3.14

// Hoisting behavior of 'var'
console.log(city); // Output: undefined (variable 'city' is hoisted)
var city = "Mumbai"; // Defining the 'city' variable

// Function hoisting
sayHello(); // Output: Namaste! (function 'sayHello' is hoisted)

function sayHello() {
  console.log("Namaste!"); // Function to greet with "Namaste!"
}

// Using variables in template literals
const firstName = "Aarav";
const lastName = "Patel";
const fullName = `${firstName} ${lastName}`; // Combining variables in a template literal
console.log(fullName); // Output: Aarav Patel
