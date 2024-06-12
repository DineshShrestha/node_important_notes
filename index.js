// const {generateRandomNumber, celToFarenheit}= require('./utils.js');
// console.log(`Random number: ${generateRandomNumber()}`);
// console.log(`Celcius to farenheit: ${celToFarenheit(23)}`);

import getPosts,{ getPostLength } from "./postController.js";

console.log(getPosts());
console.log(`Posts Length: ${getPostLength()}`);