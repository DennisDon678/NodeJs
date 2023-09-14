// Import the fs module
const fs = require('fs');

// lets append content to file3
const content = "\nNew data appended from our code.";
fs.appendFile('file3.txt', content, (err) => {
    if (err) {
        console.log(err);
    }

    console.log('We have appended the content');
});