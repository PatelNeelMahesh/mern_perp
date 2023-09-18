## Express.JS Guide

**Step 1: Setting up Your Environment**

Make sure you have Node.js installed on your machine. You can download it from the official website if you haven't already.

**Step 2: Create a New Project**

Create a new directory for your Express project and navigate to it in your terminal.

```bash
mkdir express
cd express
```

**Step 3: Initialize a Node.js Project**

Run the following command to initialize a new Node.js project. This will create a `package.json` file to manage dependencies.

```bash
npm init -y
```

**Step 4: Install Express.js**

Install Express.js as a dependency for your project.

```bash
npm install express
```

**Step 5: Create an Express Application**

Create a new file called `01.js` and open it in your text editor. This is where your Express application code will go.

```javascript
// Import the Express module
const express = require("express");

// Create an instance of the Express application
const app = express();

// Define a route for the root URL ("/")
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Start the server and listen on port 8000
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
```

Here's a breakdown of what this code does:

- We import the Express module and create an instance of the Express application.
- We define a route for the root URL ("/") using the `app.get` method. When a GET request is made to the root URL, it sends the response "Hello, Express!".
- We start the server and make it listen on port 8000. When the server starts, it prints a message to the console.

**Step 6: Run Your Express Application**

To run your Express application, open your terminal and navigate to the project directory (`express-demo`). Then, run the following command:

```bash
node 01.js
```

You should see the message "Server is running on port 8000" in your terminal, indicating that your Express server is running.

**Step 7: Test Your Express Application**

Open your web browser and go to `http://localhost:8000` or use a tool like `curl` to make a GET request:

```bash
curl http://localhost:8000
```

You should see the response "Hello, Express!" in your browser or terminal.
