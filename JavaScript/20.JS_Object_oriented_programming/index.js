// https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/

// JavaScript is a powerful programming language that supports both object-oriented and functional programming paradigms. Object-oriented programming is a programming paradigm that is purely based on the concept of "objects", which contains data about the objects. The other core concept of OOP is "classes" which makes the code more secure and encapsulated.

// Example 1: Constructor Function - Person

// Constructor:
// A constructor is a special method that gets called when you create an instance (object) of a class.
// It initializes the object's properties and sets up the initial state.
// Constructors are defined using the constructor keyword within a class.

// this Keyword:
// In a constructor or class method, this refers to the current instance of the class.
// It allows you to access and modify instance-specific properties and methods.

// class Vehicle {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }
// }

// We define a constructor function Person that creates person objects with name and age properties.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Create instances of Person
// We create instances of Person using the new keyword and log their properties.

const person1 = new Person("Amit", 30);
const person2 = new Person("Rahul", 25);

console.log(`Example 1: ${person1.name}, Age: ${person1.age}`);
console.log(`Example 1: ${person2.name}, Age: ${person2.age}`);

// Example 2: Prototype - City
// We define a constructor function City that creates city objects with name and population properties.
function City(name, population) {
  this.name = name;
  this.population = population;
}

// Adding a method to the City prototype
// We add a method getPopulationInfo to the City prototype to retrieve population information.
City.prototype.getPopulationInfo = function () {
  return `${this.name} has a population of ${this.population} people.`;
};

// Create instances of City
// We create instances of City and call the method to get population info.
const city1 = new City("Mumbai", 12478447);
const city2 = new City("Delhi", 16314838);

console.log(`Example 2: ${city1.getPopulationInfo()}`);
console.log(`Example 2: ${city2.getPopulationInfo()}`);

// Example 3: Class - Car
// We define a class Car using the ES6 class syntax with a constructor and a getCarInfo method.

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getCarInfo() {
    return `${this.make} ${this.model}`;
  }
}

// Create instances of Car
// We create instances of Car using the new keyword and call the getCarInfo method to get car info.

const car_1 = new Car("Toyota", "Camry");
const car_2 = new Car("Honda", "Civic");

console.log(`Example 3: ${car_1.getCarInfo()}`);
console.log(`Example 3: ${car_2.getCarInfo()}`);

// super Keyword:

// In a derived class (subclass), super is used to call the constructor of the parent class (superclass).
// It allows you to inherit properties and behaviors from the parent class while customizing the behavior in the derived class.

// extends Keyword:

// The extends keyword is used to create a subclass that inherits from a parent class.
// It establishes an "is-a" relationship, where the subclass "is a" specialized version of the parent class.

// class Car extends Vehicle {
//   constructor(make, model, year) {
//     super(make, model); // Calls the constructor of the parent class
//     this.year = year;
//   }
// }

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getInfo() {
    return `${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model); // Calls the constructor of the parent class
    this.year = year;
  }

  getFullInfo() {
    return `${this.getInfo()}, Year: ${this.year}`;
  }
}

const car1 = new Car("Toyota", "Camry", 2022);
console.log(car1.getFullInfo()); // Outputs: Toyota Camry, Year: 2022

// Vehicle is the parent class with a constructor and a method.
// Car is the subclass that extends Vehicle and adds its own constructor and method.
// The super keyword is used in the Car constructor to call the Vehicle constructor and inherit its properties.
// The this keyword is used to access instance-specific properties and methods.