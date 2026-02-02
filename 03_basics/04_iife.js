//Immeditately Invoked Function Expression (IIFE)

function coffee() {
    console.log(`DB connected`);
}
coffee(); //DB connected

//but what if we want to run this function only once and not pollute the global scope with the function name 'coffee'?

(function coffee() { //named iife
    console.log(`DB connected`);
})(); //DB connected
//the function is defined and immediately invoked, so it runs only once and 'coffee' is not added to the global scope

//()() ->first() defines the function, second () invokes it

//we can also use arrow functions for IIFE
(() => {
    console.log(`IIFE with arrow function`);
})(); //IIFE with arrow function

//  ; is important here because node needs to be aware that this is a separate statement and when to end it
//if the previous line does not end with a semicolon, it may lead to errors

//IIFE is useful for creating a new scope and avoiding variable name conflicts in the global scope

( (name) => {
    console.log(`Hello, ${name}`);
}) ("Mio"); //Hello, Mio