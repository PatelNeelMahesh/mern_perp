// Async & Await is a more modern approach to handle promises. It makes the code more readable and less verbose.

// async Function:

// To use async/await, you declare a function as async using the async keyword before the function keyword.
// An async function always returns a promise implicitly, which resolves to the value returned by the function or rejects with an error thrown inside the function.

// await Keyword:

// Inside an async function, you can use the await keyword before a promise to pause the execution of the function until that promise is resolved or rejected.
// The await keyword can only be used inside async functions.

// Error Handling:

// You can use try...catch blocks to handle errors that may occur when using await.
// If a promise rejected with an error, the control jumps to the nearest catch block.

// Sequential Code Flow:

// Async/await allows you to write asynchronous code in a more sequential and intuitive manner, making it easier to understand and debug.
// You can use multiple await statements one after the other to perform a series of asynchronous operations in a specific order.

async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData();

// In this example, the function getData is declared as async. Inside the function, we use the await keyword to wait for the promise returned by fetch to resolve. If the promise is fulfilled, the resolved value (the response object) is assigned to the variable response. If the promise is rejected, the control jumps to the catch block and the error is logged.

// Parallel Execution:

// If you have multiple asynchronous tasks that can run concurrently, you can use Promise.all or other techniques to execute them in parallel while still using await for each individual task when necessary.

async function fetchMultipleUrls() {
  const urls = ["url1", "url2", "url3"];
  const promises = urls.map((url) => fetchData(url));
  const results = await Promise.all(promises); // Fetch all data concurrently
  return results;
}
