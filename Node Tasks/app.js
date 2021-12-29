function greet (name){
    console.log("Hello " + name);
}
greet("Ranchhod");
console.log("Hello Universe");


console.log(module);
console.log("Module file path:"+module.filename);
const logger = require('./logger.js');
console.log(logger);
logger.logged('Sended message');


console.log(__filename);
console.log(__dirname);


// Implementation Path module

const path = require('path');
let pathObj = path.parse(__filename);
console.log(pathObj);

// Implementation OS module

const os = require('os');
let totalMemory = os.totalmem();
let freeMemory = os.freemem();

console.log("Total Memory: "+totalMemory);
console.log("Free Memory: "+freeMemory);

//Implementation file module

const fs = require('fs');

const files = fs.readdirSync('./');
console.log("Array of all files: " + files);

fs.readdir('./',function(err, files){
    if(err){
        console.log('Error',err);
    }
    else{
        console.log('Result',files);
    }
});


//Implementation of event module

const EventEmitter = require('events');
const emitter = new EventEmitter();

    // Register a listener

emitter.on('mes', (e) => {
    console.log("Hey, it's message called." , e);
});

    //Raise an event

emitter.emit('mes',{id:1, url:'http://google.com'});

//Implementation of http module

const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello Universe');
        res.end();
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3,4,5]));
        res.end();
    }
});

server.listen(3000);

console.log('Listening on google...');