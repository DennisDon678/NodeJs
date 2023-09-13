// Import the fs system
const fs = require('fs');

//Reading a File Asynchronously using nodejs
// Fs has a method readFile that allows us to read the content of a file 
fs.readFile('file1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }

    console.log('Content: ' + data);
});