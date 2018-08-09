// console.log("HELLO WORLD");



// var result = 0;
// for (i = 2; i < process.argv.length; i++){
//     result += Number(process.argv[i]);
// }
// console.log(result);



// var fs = require('fs');

// var filename = process.argv[2];

// file = fs.readFileSync(filename);

// contents = file.toString();

// console.log(contents.split('\n').length - 1);


// var fs = require('fs');

// var filename = process.argv[2];

// fs.readFile(filename, function callback(error, data){
//     if (error){
//         console.log(error.message)
//     }
//     result = data.toString();
//     console.log(result.split('\n').length - 1);
// });

var module = require('./mymodule.js');

var dirname = process.argv[2];
var ext = process.argv[3];

module(dirname, ext, function(err, files) {
  for (i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});