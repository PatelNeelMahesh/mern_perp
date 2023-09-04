// Functional programming is a programming paradigm that emphasizes using pure functions, immutability, and avoiding side effects. It focuses on solving problems using functions rather than manipulating data.

// It promotes using pure functions, immutability, higher-order functions, and recursion, which leads to expressive, maintainable, and testable code.

// keep your data and functions saperate

// Example 1: Pure Function
// square is a pure function that takes an input and returns a deterministic output without side effects.
function square(number) {
  return number * number;
}

const result1 = square(5); // Output: 25
console.log(`Example 1: Square of 5 is ${result1}`);

// Example 2: Higher-Order Function
// greet is a higher-order function that returns another function. It's used to create customized greeting functions.
function greet(prefix) {
  return function (name) {
    return `${prefix}, ${name}!`;
  };
}

const greetWithHello = greet("Hello");
const greeting = greetWithHello("Rahul"); // Output: "Hello, Rahul!"
console.log(`Example 2: ${greeting}`);

// Example 3: Immutability
// We demonstrate immutability by adding a new city to the cities array without modifying the original array.
const cities = ["Mumbai", "Delhi", "Bangalore"];

// Adding a new city without modifying the original array
const newCities = [...cities, "Chennai"];
console.log(
  `Example 3: Original Cities: ${cities.join(
    ", "
  )}, New Cities: ${newCities.join(", ")}`
);

// Example 4: Map Function (Functional Transformation)
// We use the map function to double each number in the numbers array, creating a new array.
const numbers = [1, 2, 3, 4, 5];

// Doubling each number using map
const doubledNumbers = numbers.map((num) => num * 2);
console.log(
  `Example 4: Original Numbers: ${numbers.join(
    ", "
  )}, Doubled Numbers: ${doubledNumbers.join(", ")}`
);

// Example 5: Filter Function (Functional Filtering)
// We use the filter function to extract adults (ages >= 18) from the ages array.

const ages = [25, 3, 22, 5, 18];

// Filtering adults (age >= 18) using filter
const adults = ages.filter((age) => age >= 18);
console.log(
  `Example 5: Original Ages: ${ages.join(", ")}, Adults: ${adults.join(", ")}`
);

// Example 6: Reduce Function (Functional Aggregation)
// We use the reduce function to calculate the total price of items in the prices array.
const prices = [10, 20, 30, 40, 50];

// Calculating the total price using reduce
const totalPrice = prices.reduce((acc, price) => acc + price, 0);
console.log(`Example 6: Total Price: ${totalPrice}`);
