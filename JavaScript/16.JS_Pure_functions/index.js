// Pure Function

// In functional programming, a pure function is a function that, given the same input, will always return the same output and has no side effects (i.e., it does not modify any external state). Pure functions are easy to reason about, test, and debug as their behavior is predictable.

// Example 1: Pure Function
// add is a pure function that takes two numbers and returns their sum. It has no side effects and produces the same output for the same inputs.

function add(a, b) {
  return a + b;
}

const sum = add(3, 5);
console.log(`Example 1: Sum of 3 and 5 is ${sum}`);

// output: Example 1: Sum of 3 and 5 is 8

// Example 2: Impure Function (Side Effects)

// addToTotal is an impure function because it modifies the external total variable, resulting in a side effect.
// It adds a value to the total variable, which is not recommended in pure functional programming.

let total = 0;

function addToTotal(value) {
  total += value;
}

addToTotal(10);
const currentTotal = total;
console.log(`Example 2: Current Total: ${currentTotal}`);

// output: Example 2: Current Total: 10

// Example 3: Pure Function with Object

// capitalizeName is a pure function that takes a string and returns a new string with the first letter capitalized.
// It does not modify the original string; instead, it creates a new one.

function capitalizeName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

const originalName = "rahul";
const capitalized = capitalizeName(originalName);
console.log(
  `Example 3: Original Name: "${originalName}", Capitalized Name: "${capitalized}"`
);

// output: Example 3: Original Name: "rahul", Capitalized Name: "Rahul"
