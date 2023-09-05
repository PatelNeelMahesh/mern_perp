// APIs, or application programming interfaces, are a way for different software programs to communicate with each other. In JavaScript, there are several ways to work with APIs, including using the built-in XMLHttpRequest object, the Fetch API, and libraries like axios.

// REST API
// One of the most common types of APIs used in JavaScript is the HTTP-based REST API. REST, or Representational State Transfer, is a set of architectural principles for building web services. A REST API typically uses HTTP methods like GET, POST, PUT, and DELETE to interact with a server.

// Fetch API
// Another way to make API calls in JavaScript is by using the Fetch API. The Fetch API is a more modern way to make requests and is supported by most modern browsers. Here's an example of how to use the Fetch API to make a GET request:

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

//   In the above example, we use the fetch() method to make a GET request to the specified URL. The fetch() method returns a promise that resolves with a Response object. We then use the json() method of the Response object to parse the response as JSON. The json() method also returns a promise that resolves with the parsed JSON data. We then use the then() method to log the data to the console.

// We can use libraries like axios to make API calls. Axios is a popular JavaScript library that simplifies making API requests. Here's an example of how to use axios to make a GET request:

axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));

//   In the above example, we use the get() method of the axios object to make a GET request to the specified URL. The get() method returns a promise that resolves with the response data. We then use the then() method to log the data to the console.
