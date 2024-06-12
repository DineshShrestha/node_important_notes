import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetHandler(name){
    console.log('Hello world '+name);
}

function goodbyeHandler(name){
    console.log('goodbye '+name);
}


// Register event Listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

// Emit events
myEmitter.emit('greet', 'John');
myEmitter.emit('goodbye', 'John');

// Error Handling
myEmitter.on('error', (err)=>{
    console.log('An Error occured:', err);
})

// Simulate Error
myEmitter.emit('error', new Error('Something went wrong'));