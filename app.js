// console.log('Hello node js');

// const tutorial = require('./tutorial')
// // console.log(tutorial)


// // console.log(tutorial(10,3)); // Simple one function call by Module.exports = sum;
// console.log(tutorial.add(10,80));
// console.log(tutorial.PI);
// console.log(new tutorial.SomeMathObjects());


//-----------------------------------------------------//
// Part #02 
//  Event Modules and class EventEmitter....
////Event Driven Programming 

// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();
// eventEmitter.on('Sum', (num1, num2)=>{
//     console.log('Calling Sum function....!!! ==> Added : ', num1+num2);
// });
// eventEmitter.emit('Sum', 12, 32);

// class Person extends EventEmitter{
//     constructor(name){
//         super();
//         this._name = name;
//     }
//     get name(){
//         return this._name;
//     }
// }

// let P1 = new Person('pedro');
// P1.on('first_name', ()=> { console.log('So the Username of P1 is ' + P1.name ) });

// let P2 = new Person('cristina');
// P2.on('first_name', ()=> { console.log('So the Username of P2 is ' + P2.name ) });

// P1.emit('first_name');
// P2.emit('first_name');



//-----------------------------------------------------//
// Part #03
//  ReadLine Modules (Get Users Input)......

// const readline = require('readline');
// const rl = readline.createInterface({  input  : process.stdin,
//                             output : process.stdout });


// let num1 = Math.floor((Math.random()*10)+1);
// let num2 = Math.floor((Math.random()*10)+1);
// let answer = num1 + num2;

// rl.question(` The Sum of ${ num1 } and ${ num2 } ? \n` , 
// (userInput)=>{
//     // console.log(userInput);
//     if (userInput.trim() == answer){
//         rl.close();
//     }
//     else{
//         rl.setPrompt('Your Answer is Wrong...Try Again...!!! \n');
//         rl.prompt();
//         rl.on('line', (userInput)=>{
//             if (userInput.trim() == answer){
//                 rl.close();
//             }
//             else{
//                 rl.setPrompt(`Your Answer ${ userInput } is Wrong...Try Again...!!! \n`);
//                 rl.prompt();
//             }
//         });
//     }
// });

// rl.on('close', ()=>{
//     console.log('Congrates Bud....you got CORRECT answer...!!!');
// });


//-----------------------------------------------------//
// Part #04
//  File System Modules (CRUD folders and files....Get information from files etc)......

// const fs = require('fs');
// fs.writeFile('example.txt',"This is my first file in NODE ...!!!", (err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('File Successfully created...!!!');
//         fs.readFile('example.txt','utf8',(err,file)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log(file);
//             }
//         });
//     }       
// });


// fs.rename('example.txt', 'new_example.txt', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("renamed successfuly...!!!");
//     }
// });

// fs.appendFile('example.txt', '\nData is appended data into file ...!!!', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Data Appended successfuly...!!!");
//     }
// });

// fs.unlink('example.txt', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log(" File Deleted successfuly...!!!");
//         }
//     });


//-----------------------------------------------------//
// Part #05
//  File System Modules (Dealing with Folders)==>(CRUD folders and files....Get information from files etc)......

// const fs = require('fs');

// fs.mkdir('extra folder', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(" Folder created successfuly...!!!");
//     }
// });

// fs.rmdir('extra folder', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log(" Folder deleted successfuly...!!!");
//         }
//     });

// fs.mkdir('extra folder', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         fs.writeFile('./extra folder/example.txt', 'yeah enter into folder and write into the file', (err) => {
//             if (err) {
//                 console.log(err);
//             }
//             else {
//                 console.log(" File created successfuly ...!!!");
//             }
//         });
//     }
// });

// fs.unlink('./extra folder/example.txt', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         fs.rmdir('./extra folder', (err) => {
//             if (err) {
//                 console.log(err);
//             }
//             else {
//                 console.log(" Folder deleted successfuly...!!!");
//             }
//         });
//     }
// });

/////// if we have more than one file in directory

// fs.readdir('test_folder', (err, files) => {
//     if (err)
//         console.log(err);
//     else {
//         // console.log(files);
//         for (let file of files) {
//             fs.unlink('./test_folder/' + file, (err) => {
//                 if (err) {
//                     console.log(err);
//                 }
//                 else {
//                     console.log(`deleted ${file} from folder...!!!`);
//                 }
//             });
//         }
//         fs.rmdir('./test_folder', (err) => {
//             if (err) {
//                 console.log(err);
//             }
//             else {
//                 console.log(" Also deleted Folder  successfuly...!!!");
//             }
//         });
//     }
// });

//-----------------------------------------------------//
// Part #06
// Readable and Writeable Streams....

// const fs = require('fs');
// const readStream = fs.createReadStream('./large-data-file.txt'/*,'utf8'*/);
// const writeStream = fs.createWriteStream('./new_file.txt');

// readStream.on('data',(chunk)=>{
//     // console.log(chunk); //jitny bufffer hongy utny hi chunk me read kiya
//     writeStream.write(chunk);
// });

//-----------------------------------------------------//
// Part #07
// Why we need to use Streams....
/// if size of file is very very large like GBs etc like exception came : file size is greater than buffer size 
/// in normal method fs.readFile then we'll move towards streams...like fs.createReadStream and so on...as part#06


//-----------------------------------------------------//
// Part #08
// Pipe and Pipe Chaining 

// 1. Pipe
/// take readable stream and send it to writeable stream......Source_Stream.pipe(Destination_Stream)

// const fs = require('fs');
// const readStream = fs.createReadStream('./large-data-file.txt'/*,'utf8'*/);
// const writeStream = fs.createWriteStream('./new_file.txt');

// // readStream.on('data',(chunk)=>{
// //     writeStream.write(chunk);
// // });
// /// altenate or short hand version of above method is using pipe
// readStream.pipe(writeStream);

// 2. Pipe Chaning
// Compresss the File
const fs = require('fs');
const zlib = require('zlib'); /// zlib is for file compresion
const gzip = zlib.createGzip(); /// Transform stream --> read the data and manuplate it in our case it is compresion

const readStream = fs.createReadStream('./large-data-file.txt','utf8');
const writeStream = fs.createWriteStream('./new_file.txt.gz'); // .gz is extension of gzip file...compressed file
readStream.pipe(gzip).pipe(writeStream);


