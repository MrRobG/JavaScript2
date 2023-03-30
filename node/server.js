const http = require('http');

function onRequest(req, res) {
  res.writeHead(200, { 'Content-type': 'text/plain' });
  res.write('Server is started. Hello World!');
  res.end();
}

http.createServer(onRequest).listen(8000);
