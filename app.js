// call node files app.js generally

// var readline = require('readline');

// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
//   rl.question("How's it going? ", function(answer) {
//     console.log("Awesomesauce:", answer);
//     rl.close();
//   });

// var fs = require('fs');

// var filename = "digitalCrafts.txt";
// var filename2 = "result.txt";

// fs.readFile(filename, function (error, buffer) {
//     if (error) {
//       console.log(error.message);
//       return;
//     }
//     var contents = buffer.toString();
//     var backwards = contents.split('').reverse().join('');
//     fs.writeFile(filename2, backwards, function (error) {
//       if (error) {
//         console.log(error.message);
//         return;
//       }
//       console.log('File Save: ', filename);
//     });
// });

// var filename = "myFile.txt";

// fs.writeFile(filename, 'I love Node', function (error) {
//     if (error) {
//         console.error(error.message);
//         // return;
//     }

//     console.log('File Save: ', filename);
// });

// var http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//     console.log('Server running at http://${hostname}:${port}/');
// })

var request = require('request');

var url = 'https://nodejs.org/en/';

request.get(url, function (error, response, html) {
    if (error) {
        console.log(error.message);
        return;
    }
    console.log(html);
});