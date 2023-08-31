// Accessing Elements
// Elements in the DOM are accessed using methods like getElementById().
const showButton = document.getElementById("showBtn");
const messageParagraph = document.getElementById("message");

const clickButton = document.getElementById("clickBtn");
const clickOutput = document.getElementById("clickOutput");

const textInput = document.getElementById("textInput");
const textInputOutput = document.getElementById("textInputOutput");

const hoverDiv = document.getElementById("hoverDiv");
const hoverOutput = document.getElementById("hoverOutput");

// Adding Event Listener
// An event listener is added to an element to detect a specific event 
// (e.g., button click) and execute a function when the event occurs.
showButton.addEventListener("click", function() {
  messageParagraph.style.display = "block";
});

// Output: Initially, the message is hidden.
// After clicking the button, the message becomes visible.

// Click Event
// When the "Click Me" button is clicked, the text content of the clickOutput paragraph 
// is updated to "Button was clicked!"
clickButton.addEventListener("click", function() {
    clickOutput.textContent = "Button was clicked!";
});

// Input Event
// As you type in the text input field, the textInputOutput paragraph 
// displays "Typed: " followed by the text you're typing.
textInput.addEventListener("input", function() {
    textInputOutput.textContent = "Typed: " + textInput.value;
});

// Mouseover and Mouseout Events
// When the mouse pointer is over the hoverDiv, the hoverOutput paragraph displays 
// "Mouse is over the div!" When the mouse pointer leaves the hoverDiv, the hoverOutput 
// paragraph displays "Mouse left the div!"

hoverDiv.addEventListener("mouseover", function() {
    hoverOutput.textContent = "Mouse is over the div!";
});

hoverDiv.addEventListener("mouseout", function() {
    hoverOutput.textContent = "Mouse left the div!";
});

