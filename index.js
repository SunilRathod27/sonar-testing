// Import required modules
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Server is running!');
});

// Start the server
function startServer() {
  server.listen(3000, 'localhost', () => {
    console.log('Server started on port 3000');
  });
}

// Call the startServer function when the application starts
startServer();
