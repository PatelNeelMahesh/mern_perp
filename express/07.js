// Redirects and URL Rewriting

// You can perform redirects in Express using the res.redirect method. 

const express = require('express');
const app = express();

// Redirect from /old to /new
app.get('/old', (req, res) => {
  res.redirect('/new');
});

// Serve content at /new
app.get('/new', (req, res) => {
  res.send('This is the new page.');
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});

// When you access http://localhost:8000/old, you'll be redirected to http://localhost:8000/new, and you'll see the "This is the new page." response.