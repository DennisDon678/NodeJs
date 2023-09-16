// require the fs module
const fs = require('fs');

// read html file to string
const text = fs.readFileSync('data.html').toString();

// Define our expression
const exp = /<("[^"]*"|'[^']*'|[^'">])*>/gim;

// We compare the texts
const outputArray = text.match(exp);

// Count how many
const much = outputArray.length;

console.log(much);