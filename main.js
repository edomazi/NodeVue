const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3001;

const router = require('./router');
const server = http.createServer(router);

server.listen(port, hostname, () => {
  console.log(`News at: http://${hostname}:${port}/index.html`);
});
