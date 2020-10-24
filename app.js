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

// const http = require('http');
// const fs = require('fs');
// http.createServer((req, res)=>{
//     /* const readStream = fs.createReadStream('./static/index.html');
//     res.writeHead(200, {'content-type': 'text/html' }); */

//     /* const readStream = fs.createReadStream('./static/example.json');
//     res.writeHead(200, {'content-type': 'application/json' }); */

//     /* const readStream = fs.createReadStream('./static/code.gif');
//     res.writeHead(200, {'content-type': 'image/gif' }); */

//     const readStream = fs.createReadStream('./static/cover.png');
//     res.writeHead(200, {'content-type': 'image/png' });

//     readStream.pipe(res);
// }).listen('5000');


//------------------------------------------------------------------//
// part#03...
// Create Package.Json using npm init ... holding the matadata of project file

// 1. go to cmd
// 2. npm init (node package manager)
// 3. fill all the req likes....name, entry point, repository, auther, git, etc etc
// 4. and when end this will crearte a Json file (Package.Json) in same repositiory


//------------------------------------------------------------------//
// part#04...
// Use/install External packages using nom and include them in own project....

// 1. go to website npmjs.com
// 2. multiple External packages are availiable over there.....
// 3. choose the req one e.g lodash
// 4. copy the command to install in cmd
// 5. come to cmd and type and BOOOOM loadash install
// 6. now use......

// const _ = require('lodash');
// let example = _.fill([1,2,3,4,5],'banana',1,4);
// console.log(example);

// 7. To uninstall a pkg or may be you install wrong pkg simple type npm uninstall {pkg-name}
//    it will also remove all the dependencies.... 


//------------------------------------------------------------------//
// part#05...
// Sementic versioning.....

