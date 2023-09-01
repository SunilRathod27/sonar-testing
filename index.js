// Import required modules
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/api') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      const responseData = {
        message: 'This is a GET API response',
        timestamp: new Date().toISOString()
      };
      res.end(JSON.stringify(responseData));
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Not Found');
    }
  } else {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Method Not Allowed');
  }
});

// Start the server
function startServer() {
  server.listen(3000, 'localhost', () => {
    console.log('Server started on port 3000');
  });
}

// Call the startServer function when the application starts
startServer();
