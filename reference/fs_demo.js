const fs = require('fs');
const path = require('path');

// fs.mkdir((path.join(__dirname, '/test')), {}, err => {
//   if(err) throw err;
//   console.log('folder created...');
// });

// Create and write a file...
fs.writeFile(
  path.join(__dirname, '/test', 'hello.txt'),
  'hello world!',
  err => {
    if(err) throw err;
    console.log('File written to...');
  }
)
