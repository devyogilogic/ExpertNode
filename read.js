var fs = require('fs');
 
fs.readFile('Data.txt', 'utf-8' ,function(err, buf) {
    console.log(buf.toString());
  });