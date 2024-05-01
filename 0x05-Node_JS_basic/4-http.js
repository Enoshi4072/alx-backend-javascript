// Import the HTTP module
const http = require('http');

// Create a server
const app = http.createServer((req, res) => {
  // Set the response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Write the response body
  res.end('Hello Holberton School!\n');
});

// Set the server to listen on port 1245
app.listen(1245);

// Export the server
module.exports = app;
