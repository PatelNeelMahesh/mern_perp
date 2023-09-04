// Prototypal Inheritance is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects, rather than from a class. It is a key feature of the language that enables the creation of complex and reusable code.

// Constructor function

// The Constructor function is the core of prototypal inheritance. It is a special function that creates and initializes an object. Here is an example of a constructor function for a person object:

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// We can then create new instances of the person object

const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);

// Prototype

// The Prototype is an object that is shared among all instances of a constructor function. It contains properties and methods that are available to all instances. Here is an example of adding a method to the person object's prototype:

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

// We can now call the greet method on all instances of the person object:

person1.greet(); // Output: "Hello, my name is John"
person2.greet(); // Output: "Hello, my name is Jane"

// Prototypal Inheritance

// Prototypal Inheritance is the mechanism by which an object can inherit properties and methods from its prototype. In JavaScript, an object's prototype is accessible through the proto property.

// Here is an example of creating a new object that inherits from the person object:

function Student(name, age, major) {
  Person.call(this, name, age);
  this.major = major;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

const student1 = new Student("Bob", 20, "Computer Science");
console.log(student1.name); // Output: "Bob"
console.log(student1.age); // Output: 20
console.log(student1.major); // Output: "Computer Science"
student1.greet(); // Output: "Hello, my name is Bob"

// In this example, we create a new constructor function for a student object that inherits properties and methods from the person object. We use the Object.create() method to set the student object's prototype to the person object's prototype, which allows the student object to access the properties and methods of the person object.

// In summary, Prototypal Inheritance in JavaScript allows objects to inherit properties and methods from other objects. The Constructor function is the core of prototypal inheritance, and the Prototype is an object that is shared among all instances of a constructor function.
