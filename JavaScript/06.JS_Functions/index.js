// Defining a Function
// Functions are defined using the function keyword followed by a name and parameters.
function greet(name) {
    return "Hello, " + name + "!";
}
  
// Calling a Function
// Functions are invoked (called) using their name followed by parentheses.
const greeting = greet("Aisha");
console.log(greeting); // Output: Hello, Aisha!
  
// Function with Parameters
// Functions can take parameters, which are placeholders for values passed during invocation.
function add(a, b) {
    return a + b;
}
  
const sum = add(5, 3);
console.log(sum); // Output: 8
  
// Function with Default Parameters
// Parameters can have default values if not provided during the function call.
function multiply(x, y = 2) {
    return x * y;
}
  
const product1 = multiply(4); // Uses default y = 2
const product2 = multiply(4, 3); // Uses provided y = 3
  
console.log(product1); // Output: 8
console.log(product2); // Output: 12
  
// Anonymous Functions (Function Expressions)
// Functions can be assigned to variables as anonymous functions or function expressions.
const subtract = function(a, b) {
    return a - b;
};
  
const result = subtract(10, 5);
console.log(result); // Output: 5
  
// Arrow Functions
// Arrow functions provide a shorter syntax for defining functions, 
// especially useful for simple expressions.
const divide = (x, y) => x / y;
  
const quotient = divide(15, 3);
console.log(quotient); // Output: 5
  
// Callback Functions
// Callbacks are functions passed as arguments to another function and executed later.

function square(number, callback) {
    return callback(number * number);
}
  
function double(num) {
    return num * 2;
}
  
const squaredValue = square(5, double);
console.log(squaredValue); // Output: 50
  
// Nested Functions (Closures)
// Nested functions can access variables from their containing (parent) function, 
// even after the parent function has completed.
function outer() {
    const message = "Hello from outer function";
  
    function inner() {
        console.log(message);
    }
  
    return inner;
}
  
const innerFunction = outer();
innerFunction(); // Output: Hello from outer function
  