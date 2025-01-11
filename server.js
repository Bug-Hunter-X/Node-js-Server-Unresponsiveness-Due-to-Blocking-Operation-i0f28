const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running task
  const start = Date.now();
  while (Date.now() - start < 5000) {}; // Keep the CPU busy for 5 seconds

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});