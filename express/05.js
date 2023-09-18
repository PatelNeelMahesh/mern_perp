// Handling POST Requests and Form Data

//  we'll create a simple Express application that handles a POST request and processes form data submitted by a user.

const express = require('express');
const bodyParser = require('body-parser'); // We'll use the body-parser middleware to parse form data
const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve a form for user input
app.get('/form', (req, res) => {
  res.send(`
    <form method="POST" action="/submit">
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  `);
});

// Handle the POST request and display user input
app.post('/submit', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  res.send(`Username: ${username}, Password: ${password}`);
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});

// We use the body-parser middleware to parse form data submitted in POST requests. It extracts the data and makes it available in req.body.

// The /form route serves an HTML form that allows the user to enter a username and password.

// The /submit route handles the POST request, retrieves the form data from req.body, and displays it in the response.

// When you access http://localhost:8000/form and submit the form, you'll see the submitted data displayed on the /submit page.