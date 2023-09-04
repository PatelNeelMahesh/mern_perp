// Higher-order functions take other functions as arguments or return functions as results, enabling powerful and concise data manipulation in JavaScript.

// Example: Using map to double each element in an array
// It returns a new array with the transformed values.

const map_numbers = [1, 2, 3, 4, 5];

// Define a function to double a number
function double(number) {
  return number * 2;
}

// Use map to create a new array with doubled values
const doubledNumbers = map_numbers.map(double);

console.log(doubledNumbers);
// Output: [2, 4, 6, 8, 10]

// Example 2: Higher-Order Function - filter

// The filter function filters the ages array based on the isAdult function, which checks if an age is greater than or equal to 18.
// It returns a new array with only the ages of adults.

const ages = [5, 30, 2, 35, 18];

function isAdult(age) {
  return age >= 18;
}

const adults = ages.filter(isAdult);
console.log(`Example 2: Adults: ${adults.join(", ")}`);

// Example 3: Higher-Order Function - reduce

// The reduce function calculates the total sum of the numbers array using the sum function.
// It starts with an initial value of 0 and accumulates the sum.

const numbers = [1, 2, 3, 4, 5];

function sum(accumulator, number) {
  return accumulator + number;
}

const total = numbers.reduce(sum, 0);
console.log(`Example 3: Total Sum: ${total}`);

// Example 4: Higher-Order Function - forEach

// The forEach function iterates over the names array and applies the greet function to each name, logging a greeting for each.

const names = ["Amit", "Rahul", "Priya"];

function greet(name) {
  console.log(`Hello, ${name}!`);
}

console.log("Example 4: Greetings:");
names.forEach(greet);
