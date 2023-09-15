// Require the fs module
const fs = require('fs');

// Lets rename file1
fs.rename('file1.txt', 'file1_renamed.txt', (err) => {
    if (err) {
        console.log(err);
    }

    console.log('File renamed');
});