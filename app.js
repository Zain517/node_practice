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

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('Sum', (num1, num2)=>{
    console.log('Calling Sum function....!!! ==> Added : ', num1+num2);
});
eventEmitter.emit('Sum', 12, 32);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }
    get name(){
        return this._name;
    }
}

let P1 = new Person('pedro');
P1.on('first_name', ()=> { console.log('So the Username of P1 is ' + P1.name ) });

let P2 = new Person('cristina');
P2.on('first_name', ()=> { console.log('So the Username of P2 is ' + P2.name ) });

P1.emit('first_name');
P2.emit('first_name');
