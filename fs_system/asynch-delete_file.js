// Import the fs module
const fs = require("fs");

// lets delete file3
fs.unlink("file3.txt", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File deleted as it should");
    }
});
