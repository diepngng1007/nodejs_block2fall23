const http = require('node:http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    `<h1>Hello world</h1>`
  );
});

server.listen(8000, () => {
    console.log('Máy chủ đang chạy trên cổng 8000')
});