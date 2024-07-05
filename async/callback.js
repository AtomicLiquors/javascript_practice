'use strict';
// JavaScript is synchronous.
// Execute the code block by in order after hoisting.
// hoisting: var, function declaration

console.log(1);
setTimeout(() => console.log(2), 1000);
console.log(3);

// Synchronous callback

// Asynchronous callback