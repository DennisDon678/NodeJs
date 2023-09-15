// require the fs module
const { Console } = require('console');
const fs = require('fs');

// lets delete file4
fs.unlinkSync('file4.txt');
console.log('File deleted');