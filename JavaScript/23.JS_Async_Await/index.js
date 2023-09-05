// Async & Await is a more modern approach to handle promises. It makes the code more readable and less verbose.

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
