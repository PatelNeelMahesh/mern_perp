// DOM (Document Object Model) 

// Accessing Elements
// Elements in the DOMcan be accessed using methods like getElementById().
const introParagraph = document.getElementById("intro");
const changeButton = document.getElementById("changeBtn");

const countValue = document.getElementById("countValue");
const incrementButton = document.getElementById("incrementBtn");

const fruitsList = document.getElementById("fruitsList");

// Adding Event Listener
// Event listeners are added to elements to detect specific events (e.g., a button click)
// and execute a function when the event occurs.
changeButton.addEventListener("click", function() {
    introParagraph.textContent = "Welcome to the city of Delhi!";
});

// The textContent property allows you to modify the text content of an element.

// Output: Initially displays "Welcome to the city of Mumbai!"
// After clicking the button, changes to "Welcome to the city of Delhi!"



// Incrementing Counter on Button Click
// The counter div contains a counter value. Clicking the "Increment" button increases the counter value, 
// and the value is displayed in the countValue span.

let count = 0;
incrementButton.addEventListener("click", function() {
  count++;
  countValue.textContent = count;
});

// Changing List Item Text on Click
// When a list item within the fruitsList unordered list is clicked, its text is changed 
// to uppercase using the toUpperCase() method.

fruitsList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
      event.target.textContent = event.target.textContent.toUpperCase();
    }
});