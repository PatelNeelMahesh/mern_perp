// JavaScript is a single-threaded language with a non-blocking, asynchronous execution model. The event loop manages the execution of code, handling events, and callbacks.

// The JavaScript event loop is a crucial part of handling asynchronous code. It ensures that JavaScript remains responsive and doesn't block the main thread.

// Example 1: setTimeout
// setTimeout schedules the callback function to execute after 2 seconds, but other code continues to run.

console.log("Example 1: Start");
setTimeout(() => {
  console.log("Example 1: Inside setTimeout callback");
}, 2000);
console.log("Example 1: End");

// Example 2: Asynchronous Function
// the asyncFunction schedules a callback, demonstrating how asynchronous functions work.
console.log("Example 2: Start");
function asyncFunction() {
  setTimeout(() => {
    console.log("Example 2: Inside asyncFunction callback");
  }, 1000);
}
asyncFunction();
console.log("Example 2: End");

// Example 3: Event Listener
// an event listener waits for a click event but doesn't block other code execution.
console.log("Example 3: Start");
document.addEventListener("click", () => {
  console.log("Example 3: Inside click event listener");
});
console.log("Example 3: End");

// Example 4: Promise
// a Promise resolves after 1.5 seconds, and its .then callback executes when the Promise is resolved.
console.log("Example 4: Start");
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Example 4: Promise resolved");
  }, 1500);
});

promise.then((result) => {
  console.log(result);
});
console.log("Example 4: End");
