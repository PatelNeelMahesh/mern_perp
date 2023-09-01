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
  
// Default Parameters
// Default parameters allow functions to have default values for parameters if no argument or undefined is provided, making functions more flexible and self-explanatory.
const greetPerson = (name = "Guest") => {
    return `Hello, ${name}!`;
};

console.log("Default Parameters:", greetPerson("Priya"));
  
// Spread Operator
// The spread operator (...) allows for the expansion of elements in arrays, objects, and function arguments. It simplifies operations like concatenating arrays.
const cities = ["Mumbai", "Delhi", "Bangalore"];
const moreCities = ["Chennai", "Kolkata", ...cities];

console.log("Spread Operator: Cities -", moreCities.join(", "));
  
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
const sum = (...numbers) => {
    return numbers.reduce((total, number) => total + number, 0);
};
console.log("Classes: My Car -", myCar.getCarInfo()); 
  
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
  