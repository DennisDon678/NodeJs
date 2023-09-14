// import fs
const fs = require('fs');

//Writing a File Asynchronously using nodejs
const content = 'We are writing this from our code to the text file, thanks';
fs.writeFile("file3.txt", content, (err) => {
    if (err) {
        console.log(err);
    }

    console.log('Written.');
});