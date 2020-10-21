// part#01...
// Create HTTP server using HTTP module

// const http = require('http');
// const server = http.createServer((req, res)=>{
//     if(req.url === '/'){
//         res.write('Hey Bud....this HOME_PAGE response is from Node side....!!!');
//         res.end();
//     }
//     else{
//         res.write('Oops, Your are acessing from another Domain...!!!');
//         res.end();
//     }
// });
// server.listen('5000');

//------------------------------------------------------------------//
// part#02...
// Serving Static files with HTTP and File System Module

const http = require('http');
const fs = require('fs');
http.createServer((req, res)=>{
    /* const readStream = fs.createReadStream('./static/index.html');
    res.writeHead(200, {'content-type': 'text/html' }); */

    /* const readStream = fs.createReadStream('./static/example.json');
    res.writeHead(200, {'content-type': 'application/json' }); */

    /* const readStream = fs.createReadStream('./static/code.gif');
    res.writeHead(200, {'content-type': 'image/gif' }); */

    const readStream = fs.createReadStream('./static/cover.png');
    res.writeHead(200, {'content-type': 'image/png' });
    
    readStream.pipe(res);
}).listen('5000');
