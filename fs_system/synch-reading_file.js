// Import fs
const fs = require('fs');

// Synchronously read from file
const content = fs.readFileSync('file2.txt');
console.log('Content: ' + content);