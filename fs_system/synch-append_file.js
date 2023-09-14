// import the fs module
const fs = require('fs');

// lets append content to file4
const content = "\nNew data appended from our code.";
fs.appendFileSync('file4.txt', content);
console.log('Successfull operation');