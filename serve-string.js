// require http
const http = require('http');

// host and port
const host = '127.0.0.1';
const port = 3000;

// Create server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello world \n');
    res.write('Displaying a string');

    res.end();
});

// Create a listener
server.listen(port, host, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("server is listening on http://" + host + ":" + port);
})