'use strict';
// JavaScript is synchronous.
// Execute the code block by in order after hoisting.
// hoisting: var, function declaration

setTimeout(function(){
    console.log('function keyword this : ');
    console.log(this);
}, 500);


setTimeout(() => {
    console.log('arrow function this : ')
    console.log(this);
}, 1000);


const obj = {
    id: '2kooong2',
    arrow: () => {
        console.log('Object arrow function this : ')
        console.log(this);
    },
    func: function() {
        console.log('Object function keyword this : ')
        console.log(this);
    }

}

obj.arrow();
obj.func();