// Arrow Functions
// Arrow functions provide a concise syntax for defining functions. They maintain the lexical this context, making them especially useful in callback functions and avoiding issues with the this keyword.
const greet = (name) => {
  return `Hello, ${name}!`;
};

console.log("Arrow Function:", greet("Rahul"));

// Template Literals
// Template literals, enclosed in backticks, allow for string interpolation and multiline strings, making it easier to create complex string output.
const city = "Mumbai";
const greeting = `Welcome to ${city}, the city of dreams!`;

console.log("Template Literals:", greeting);

// Destructuring
// Destructuring provides a concise way to extract values from arrays or objects, improving code readability and reducing the need for multiple variable assignments.
const [firstCar, secondCar] = ["Maruti", "Hyundai"];

console.log("Destructuring: First Car -", firstCar, "Second Car -", secondCar);

// Basic Array Destructuring:

const colors = ["red", "green", "blue"];
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor); // Output: "red"
console.log(secondColor); // Output: "green"
console.log(thirdColor); // Output: "blue"

// Skipping Elements:

const fruits = ["apple", "banana", "cherry", "date"];
const [firstFruit, , , lastFruit] = fruits;

console.log(firstFruit); // Output: "apple"
console.log(lastFruit); // Output: "date"

// Rest Operator in Array Destructuring:

const numbers = [1, 2, 3, 4, 5];
const [firstNumber, ...restNumbers] = numbers;

console.log(firstNumber); // Output: 1
console.log(restNumbers); // Output: [2, 3, 4, 5]

// Nested Object Destructuring:

const employee = {
  name: "Bob",
  job: {
    title: "Developer",
    department: "Engineering",
  },
};
const {
  name,
  job: { title, department },
} = employee;

console.log(name); // Output: "Bob"
console.log(title); // Output: "Developer"
console.log(department); // Output: "Engineering"

// Default Parameters
// Default parameters allow functions to have default values for parameters if no argument or undefined is provided, making functions more flexible and self-explanatory.
const greetPerson = (name = "Guest") => {
  return `Hello, ${name}!`;
};

console.log("Default Parameters:", greetPerson("Priya"));

// Classes
// Classes provide a more structured way to define objects and their behavior in JavaScript, following the principles of object-oriented programming (OOP).
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getCarInfo() {
    return `${this.make} ${this.model}`;
  }
}

const myCar = new Car("Maruti", "Swift");
console.log("Classes: My Car -", myCar.getCarInfo());

// Promises
// Promises are used for handling asynchronous operations in a more organized and readable manner. They offer better error handling and a more structured flow for asynchronous code.
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Data fetched successfully!";
      resolve(data);
      // reject("Error fetching data");
    }, 2000);
  });
};

// Using Promises
fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

// Rest Operator
// The rest operator (...) gathers multiple function arguments into an array, simplifying the handling of variable-length argument lists.

// Rest in Function Parameters:
// The rest operator collects remaining function arguments into an array.

function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10

// Rest in Array Destructuring:
// Collect remaining elements into an array.

const [first, ...rests] = [1, 2, 3, 4, 5];

console.log(first); // Output: 1
console.log(rests); // Output: [2, 3, 4, 5]

// Rest in Object Destructuring:
// Collect remaining object properties into an object.

const { a, ...rest } = { a: 1, b: 2, c: 3 };

console.log(a); // Output: 1
console.log(rest); // Output: { b: 2, c: 3 }

// Spread Operator
// The spread operator (...) allows for the expansion of elements in arrays, objects, and function arguments. It simplifies operations like concatenating arrays.
const cities = ["Mumbai", "Delhi", "Bangalore"];
const moreCities = ["Chennai", "Kolkata", ...cities];

console.log("Spread Operator: Cities -", moreCities.join(", "));

// Spread in Function Arguments:
// Spread elements of an array into function arguments.

function multiply(x, y, z) {
  return x * y * z;
}

const values = [2, 3, 4];
console.log(multiply(...values)); // Output: 24

// Spread in Array Creation:
// Create a new array by spreading elements from an existing array.

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2); // Output: [1, 2, 3, 4, 5]

// Spread in Object Properties:
// Create a new object by spreading properties from an existing object.

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };

console.log(obj2); // Output: { a: 1, b: 2, c: 3 }

// Spread for Cloning Objects:
// Create a new object with the same properties as an existing one (shallow copy).

const original = { x: 1, y: 2 };
const clone = { ...original };

console.log(clone); // Output: { x: 1, y: 2 }

// Spread for Merging Arrays:
// Merge multiple arrays into one.

const arr_1 = [1, 2];
const arr_2 = [3, 4];
const mergedArray = [...arr_1, ...arr_2];

console.log(mergedArray); // Output: [1, 2, 3, 4]

// Rest Operator (...): It's used to collect multiple values (parameters, elements, properties) into a single array or object.

// Spread Operator (...): It's used to spread (expand) the elements of an array or the properties of an object into another array or object, effectively making copies or combining them.

// Set
// Sets are collections of unique values, allowing you to work with distinct elements. They are useful when you need to ensure uniqueness in a collection of data.
const uniqueNumbers = new Set();
uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(1); // Duplicates are automatically removed

console.log("Set: Unique Numbers -", Array.from(uniqueNumbers).join(", "));

// Map
// Maps are collections of key-value pairs, providing an efficient way to associate data with keys. They offer better performance than plain objects in certain scenarios.
const person = new Map();
person.set("name", "Rahul");
person.set("age", 30);

console.log("Map: Name -", person.get("name"), "Age -", person.get("age"));

// Modules
// JavaScript modules are a feature of ECMAScript 6 (ES6) that provide a way to organize and reuse code. A module is a piece of code that can be exported and imported by other scripts.

// exported module:
// math.js
// export const PI = 3.14;
// export function calculateCircumference(diameter) {
//   return PI * diameter;
// }

// imported module
// main.js
// import { PI, calculateCircumference } from './math.js';
// console.log(PI); // 3.14
// console.log(calculateCircumference(10)); // 31.4

// for...in Loop

// The for...in loop is used to iterate over the enumerable properties (including inherited properties) of an object. It's often used for iterating over the properties of objects like arrays and plain objects.

const car = {
  make: "Maruti",
  model: "Swift",
  year: 2022,
};

for (const key in car) {
  console.log(key + ": " + car[key]);
}

// Explanation:

// The for...in loop iterates over each property (key) in the car object.
// In each iteration, the key variable represents the property name.
// Using car[key], we access the corresponding property value and log it.

// for...of Loop

// The for...of loop is used to iterate over iterable objects like arrays, strings, maps, sets, and more. It provides a simpler and more concise syntax for iterating over values.

const colors2 = ["red", "green", "blue"];

for (const color of colors2) {
  console.log(color);
}

// Explanation:

// The for...of loop iterates over the values (elements) in the colors2 array.
// In each iteration, the color variable represents the current element's value.
// We log each color to the console.

// Output:
// red
// green
// blue

// Key Differences:

// for...in is used for iterating over object properties (keys).
// for...of is used for iterating over iterable objects (values).

// for...in is used with objects (including arrays), and it iterates over property names (keys).
// for...of is used with iterable objects like arrays, strings, maps, sets, etc., and it iterates over the actual values.

// for...in can iterate over inherited properties, which may not be desired in some cases.
// for...of is often preferred for iterating over arrays and collections of values due to its simplicity and focus on values rather than keys.
