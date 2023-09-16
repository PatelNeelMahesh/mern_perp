const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  //   // Set the response headers
  //   res.writeHead(200, { "Content-Type": "text/plain" });

  //   // Send a "Hello, World!" message as the response
  //   res.end("Hello, World!\n");

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World!\n");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is the About page.\n");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Contact us at example@example.com.\n");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found\n");
  }
});

// Listen on port 8000
const port = 8000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
