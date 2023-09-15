// Require the fs module
const fs = require('fs');

// lets rename file2
fs.renameSync('file2.txt', 'file2_renamed.txt');
console.log('renamed successfully');