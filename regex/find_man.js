// Require the fs module to read the file
const fs = require('fs');

// read the file synchronousle tp a variable
// We used toString to ensure that the content is string
const text = fs.readFileSync("data.txt").toString();

// Lets define our reg expression
// We can also use the second method to define our expression
const exp = /man/gim;

// Lets now match
const myArray = text.match(exp);
console.log(myArray);

// lets count the number of times this occured
const amount = myArray.length;
console.log(amount);