const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  // Get the name of the executed script
  const scriptName = __filename;

  // Get the arguments passed to the script
  const scriptArguments = process.argv.slice(2);

  // Get the IP address of the server
  const serverIpAddress = req.connection.localAddress;

  // Get the name of the host that invokes the current script
  const invokingHost = req.headers.host;

  // Get the name and version of the information protocol
  const protocolName = req.protocol;
  const protocolVersion = req.httpVersion;

  // Get the query method
  const queryMethod = req.method;

  // Get the User-Agent information
  const userAgent = req.headers['user-agent'];

  // Get the IP address of the client
  const clientIpAddress = req.connection.remoteAddress;

  // Get a list of parameters passed by URL
  const urlParams = url.parse(req.url, true).query;

  // Output the information to the console
  console.log(`Name of executed script: ${scriptName}`);
  console.log(`Arguments passed to the script: ${scriptArguments}`);
  console.log(`IP address of the server: ${serverIpAddress}`);
  console.log(`Name of host that invokes the current script: ${invokingHost}`);
  console.log(`Name of information protocol: ${protocolName}`);
  console.log(`Version of information protocol: ${protocolVersion}`);
  console.log(`Query method: ${queryMethod}`);
  console.log(`User-Agent information: ${userAgent}`);
  console.log(`IP address of the client: ${clientIpAddress}`);
  console.log('List of parameters passed by URL:', urlParams);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Information printed to console.');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
