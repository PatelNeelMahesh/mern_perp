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

// A callback is a function that is passed as an argument to another function and is executed after the first function is finished. This allows for non-blocking code execution, as the program can continue to run while the callback function is waiting to be executed.

// Callbacks can be used in many of the JavaScript built-in functions such as setTimeout() and setInterval()

// using too many callbacks can lead to a phenomenon called "callback hell" where the code becomes difficult to read and understand due to the nested structure of the callbacks. To avoid this, you can use modern JavaScript features such as Promises and async/await.

// Example 4: Promise
// a Promise resolves after 1.5 seconds, and its .then callback executes when the Promise is resolved.

// Promises in JavaScript are a way to handle asynchronous operations more effectively. They provide a structured approach for managing asynchronous code, making it easier to handle success and error conditions. Promises are crucial because they help prevent callback hell (nested callbacks) and simplify asynchronous code, improving code readability and maintainability.

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

// In JavaScript, understanding the task queue, microtask queue, and the order in which promises get resolved is essential to grasp how the event loop handles asynchronous code execution.

// 1. Callback Queue / Task Queue:
//    - The Task Queue (also known as the Callback Queue or Message Queue) is a queue that holds tasks or functions that are ready to be executed. These tasks include I/O operations, timers, and other callbacks.
//    - Tasks in the Task Queue are processed in a first-in-first-out (FIFO) order.
//    - When the JavaScript engine has finished executing the current call stack (the set of functions being executed), it checks the Task Queue for tasks to execute. If there are tasks in the Task Queue, they are executed one by one.

// 2. Microtask Queue:
//    - The Microtask Queue (also known as the Job Queue) is a queue that holds microtasks. Microtasks are usually higher-priority tasks that need to be executed before the regular tasks in the Task Queue.
//    - Promises and certain APIs, like `MutationObserver`, schedule callbacks as microtasks.
//    - Microtasks have higher priority, so they are executed before the next task in the Task Queue.
//    - Microtasks are processed in a first-in-first-out (FIFO) order within the Microtask Queue.

// Order of Promise Resolution in the Event Loop:

// When a promise is resolved, it schedules a microtask to run its `.then()` or `.catch()` callback. The order of promise resolution in the event loop is as follows:

// 1. Synchronous Code Execution:
//    - The JavaScript engine starts executing synchronous code from top to bottom.

// 2. Microtasks Queue (Microtask Phase):
//    - While executing synchronous code or after it completes, the JavaScript engine checks the Microtask Queue.
//    - If there are microtasks in the queue (e.g., promise callbacks), it processes them one by one until the Microtask Queue is empty.
//    - This means that any promise callbacks scheduled as microtasks will execute before the next task in the Task Queue.

// 3. Task Queue (Task Phase):
//    - After processing all microtasks, the JavaScript engine moves to the Task Queue.
//    - It checks if there are tasks (e.g., timers, I/O callbacks) in the Task Queue.
//    - If tasks are present, the engine picks the first task and executes it.
//    - This continues in a loop until both the Microtask Queue and Task Queue are empty.

console.log("Start");

// Microtask (Scheduled as a Microtask)
Promise.resolve().then(() => {
  console.log("Microtask 1");
});

console.log("Synchronous Code");

// Microtask (Scheduled as a Microtask)
Promise.resolve().then(() => {
  console.log("Microtask 2");
});

setTimeout(() => {
  console.log("Task (Timeout)");
}, 0);

console.log("End");

// Start
// Synchronous Code
// End
// Microtask 1
// Microtask 2
// Task (Timeout)

// - Synchronous code executes first.
// - The microtasks (`Microtask 1` and `Microtask 2`) are processed before the task scheduled with `setTimeout`.

// This order ensures that promise callbacks (microtasks) have higher priority and are executed before other asynchronous tasks (tasks) in the event loop, providing predictable behavior for promise resolution.

// In JavaScript's event loop, different functions have different priorities, and this determines the order in which they are executed. The priorities are as follows:

// 1.Synchronous Code:

// Synchronous code, which is the code executed line by line from top to bottom, has the highest priority.It blocks the event loop until it's fully executed.

// 2.Microtasks (High Priority):

// Microtasks, often referred to as high-priority tasks, include the following:
// Promises (.then() and .catch() callbacks).
// MutationObserver callbacks.
// Microtasks have higher priority than regular tasks and are executed before them.
// They are processed in a first-in-first-out (FIFO) order within the Microtask Queue.

// 3. Timers and I/O Operations (Medium Priority):

// Timers (e.g., setTimeout, setInterval) and I/O operations (e.g., file I/O, network requests) have a medium priority.
// They are placed in the Task Queue and are executed after the Microtask Queue is empty.
// Timers are scheduled to run after a specified delay, while I/O operations depend on external events.

// 4. Request Animation Frame (RAF) (Medium Priority):

// requestAnimationFrame callbacks are used for animations and have a medium priority.
// They are typically executed before the next repaint of the screen, aiming for smoother animations.

// 5. Event Handlers (Medium Priority):

// Event handlers, such as click or keypress event callbacks, also have a medium priority.
// They are executed in response to specific user interactions or events.

// 6. Idle Callbacks (Low Priority):

// requestIdleCallback is a mechanism for scheduling work during periods of idle time.
// Idle callbacks have a low priority and are executed when the main thread is idle and not processing other tasks.
