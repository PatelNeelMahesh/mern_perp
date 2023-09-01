// Arrow Functions
// Arrow functions provide a concise syntax for defining functions. They maintain the lexical this context, making them especially useful in callback functions and avoiding issues with the this keyword.
const greet = (name) => {
    return `Hello, ${name}!`;
};
  
  // Template Literals
  const city = "Mumbai";
  const greeting = `Welcome to ${city}, the city of dreams!`;
  
  // Destructuring
  const [firstCar, secondCar] = ["Maruti", "Hyundai"];
  
  // Default Parameters
  const greetPerson = (name = "Guest") => {
    return `Hello, ${name}!`;
  };
  
  // Spread Operator
  const cities = ["Mumbai", "Delhi", "Bangalore"];
  const moreCities = ["Chennai", "Kolkata", ...cities];
  
  // Classes
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
  const sum = (...numbers) => {
    return numbers.reduce((total, number) => total + number, 0);
  };
  
  console.log("Arrow Function:", greet("Rahul"));
  console.log("Template Literals:", greeting);
  console.log("Destructuring: First Car -", firstCar, "Second Car -", secondCar);
  console.log("Default Parameters:", greetPerson("Priya"));
  console.log("Spread Operator: Cities -", moreCities.join(", "));
  console.log("Classes: My Car -", myCar.getCarInfo());
  
  // Set
  const uniqueNumbers = new Set();
  uniqueNumbers.add(1);
  uniqueNumbers.add(2);
  uniqueNumbers.add(1); // Duplicates are automatically removed
  
  // Map
  const person = new Map();
  person.set("name", "Rahul");
  person.set("age", 30);
  
  console.log("Set: Unique Numbers -", Array.from(uniqueNumbers).join(", "));
  console.log("Map: Name -", person.get("name"), "Age -", person.get("age"));
  