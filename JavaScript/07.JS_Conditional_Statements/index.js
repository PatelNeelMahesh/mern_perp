// If Statement
// Executes a block of code if the given condition is true.
const age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}

// If-Else Statement
// Executes one block of code if the condition is true and another block if it's false.
const temperature = 25;

if (temperature > 30) {
  console.log("It's hot outside.");
} else {
  console.log("It's not too hot.");
}

// If-Else If-Else Statement
// Checks multiple conditions and executes corresponding blocks based on the first true condition.
const time = 14;

if (time < 12) {
  console.log("Good morning!");
} else if (time < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

// Ternary Operator
// Offers a concise way to write conditional statements. 
// It evaluates an expression and returns one of two values.
const isRaining = true;
const weatherMessage = isRaining ? "Take an umbrella" : "Enjoy the weather";
console.log(weatherMessage);

// Switch Statement
// Checks a variable against multiple cases and executes code based on the matching case. 
// The break keyword is used to exit the switch block.
const day = "Monday";
let dayMessage;

switch (day) {
  case "Monday":
    dayMessage = "It's the start of the week.";
    break;
  case "Friday":
    dayMessage = "It's almost the weekend!";
    break;
  default:
    dayMessage = "It's a regular day.";
}

console.log(dayMessage);
