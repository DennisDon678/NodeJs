// To create a server we need to import http from node modules 
const http = require('http');

// We also define a host and a port to listen to
const host = '127.0.0.1';
const port = 3000;

// Creating a server
// We use the createServer method which takes a callback function
// req, contains the request information
// res, is the response to be sent back.
// we also have some methods on the res which is used to specify status code, or end a request
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    console.log("server Working");
    res.end("Server Working Success");
});

// server.listen() is an inbuilt method used to bind to the port an start listening for incoming connections.

server.listen(port, host, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("server is listening on " + host + ":" + port);
    }
});