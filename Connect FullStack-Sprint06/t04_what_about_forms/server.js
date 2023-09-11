const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const port = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Serve the HTML file
  if (pathname === '/') {
    const htmlPath = path.join(__dirname, 'index.html');

    fs.readFile(htmlPath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Internal Server Error');
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  }
  // Handle form submission
  else if (pathname === '/check-answer' && req.method === 'POST') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      const postData = decodeURIComponent(body).split('=')[1];
      const correctAnswer = 'paris'; // Replace with the correct answer

      if (postData === correctAnswer) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Correct answer!');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Incorrect answer. Please try again.');
      }
    });
  }
  // Serve other static files (like script.js)
  else {
    const filePath = path.join(__dirname, pathname);
    const extname = path.extname(filePath);

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('File not found');
        return;
      }

      const contentType = {
        '.js': 'text/javascript'
      }[extname] || 'text/plain';

      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
