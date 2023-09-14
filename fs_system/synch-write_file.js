// Import fs
const fs = require('fs');

//Writing a file synchronously using nodejs
const content = 'This another content for our file from our code.';

fs.writeFileSync('file4.txt',content);
console.log('Written');