// Creating an Object
// Objects are collections of key-value pairs enclosed in curly braces.
const person = {
    firstName: "Rahul",
    lastName: "Sharma",
    age: 28,
    isStudent: false,
};
  
// Accessing Object Properties
// Properties are accessed using dot notation or square brackets.
const firstName = person.firstName;
const age = person["age"];
  
console.log(firstName); // Output: Rahul
console.log(age); // Output: 28
  
// Modifying Object Properties
// Properties can be modified using assignment.
person.lastName = "Verma";
person["age"] = 32;
  
console.log(person); // Output: { firstName: "Rahul", lastName: "Verma", age: 32, isStudent: false }
  
// Adding New Properties
// New properties can be added to an object.
person.gender = "male";
person["city"] = "Mumbai";
  
console.log(person); // Output: { firstName: "Rahul", lastName: "Verma", age: 32, isStudent: false, gender: "male", city: "Mumbai" }
  
// Deleting Properties
// Properties can be deleted using the delete keyword.
delete person.isStudent;
  
console.log(person); // Output: { firstName: "Rahul", lastName: "Verma", age: 32, gender: "male", city: "Mumbai" }
  
// Nested Objects
// Objects can contain other objects as properties.
const car = {
    make: "TATA",
    model: "Safari",
    year: 2020,
    owner: {
        firstName: "Priya",
        lastName: "Srivastava",
        age: 28,
    },
};
  
console.log(car.owner.firstName); // Output: Priya
  
// Object Methods
// Objects can also contain functions, which are called methods.
const calculator = {
    add: function(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
};
  
console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(10, 4)); // Output: 6
  