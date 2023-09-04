// Functions can be treated like any other data type, enabling higher-order functions, dynamic behavior, and functional programming patterns.

// Example 1: Functions as Values
// In JavaScript, functions are first-class citizens, which means they can be assigned to variables (greet and farewell).

const greet = (name) => `Hello, ${name}!`;
const farewell = (name) => `Goodbye, ${name}!`;

// Example 2: Functions as Arguments
// Functions can be passed as arguments to other functions (saySomething takes a name and a function to greet or farewell).

function saySomething(name, fn) {
  const message = fn(name);
  console.log(message);
}

saySomething("Rahul", greet);
saySomething("Priya", farewell);

// Output: "Hello, Rahul!"
// Output: "Goodbye, Priya!"

// Example 3: Functions as Return Values
// Functions can return other functions (createMultiplier returns a function that multiplies a number by a factor).

function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(`Example 3: Double of 5 is ${double(5)}`);
console.log(`Example 3: Triple of 7 is ${triple(7)}`);

// Output: "Example 3: Double of 5 is 10"
// Output: "Example 3: Triple of 7 is 21"

// Example 4: Functions as Properties (Methods)
// Functions can be properties of objects and used as methods (fullName is a method of the person object).

const person = {
  firstName: "Amit",
  lastName: "Sharma",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(`Example 4: Full Name: ${person.fullName()}`);

// Output: "Example 4: Full Name: Amit Sharma"
