// console.log("M");
// console.log("I");
// console.log("O");
//if you wannt to repeat something multiple times, you can use a function

const { use } = require("react");

function sayMyName() {
    console.log("M");
    console.log("I");
    console.log("O");   
}

sayMyName();
// sayMyName is a reference to the function
// () this calls the function sayMyName()

function addTwoNumbers(number1, number2) { //number1 and number2 are parameters
    console.log(number1 + number2);
}

addTwoNumbers(5, 7);
// 5 and 7 are arguments, they get passed into the function parameters number1 and number2
//without parameters and arguments, a function is not very useful and this particular function would print NaN (not a number)

//parameters are like placeholders, they get filled in with arguments when the function is called

addTwoNumbers(10, "a"); // this would print 10a because of type coercion in JavaScript

const result = addTwoNumbers(20, 30); //this would print 50
console.log(result); //this would print undefined because the function does not return anything

function addTwoNumbersWithReturn(number1, number2) {
    return number1 + number2; //return keyword returns a value from the function
}

const resultWithReturn = addTwoNumbersWithReturn(20, 30);
console.log(resultWithReturn); //this would print 50

//once a return statement is reached, the function exits, so any code after the return statement will not be executed

function loginUserMessage(username) {
    if (!username) {
        return "Please enter a username"; //exit the function if username is falsy
    }
    return `${username} just logged in`; //print the username if it is truthy
}

//template literals are strings that allow embedded expressions, they are enclosed by backticks (` `)

const message = loginUserMessage(""); //passing an empty string as username
console.log(message); //this would print "Please enter a username"
const message2 = loginUserMessage("Mio");
console.log(message2); //this would print "Mio just logged in"

function calculateCartPrice(...prices) { //rest operator allows us to pass an arbitrary number of arguments as an array
    console.log(prices); 
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
         total += prices[i];
    }
   return total;
}

const cartTotal = calculateCartPrice(20, 30, 40, 50); //passing multiple arguments
console.log(cartTotal); //this would print 140

//function calculateCartPrice(val1, val2, ...prices) {}
//this would be valid, val1 and val2 would be assigned the first two arguments, and the rest would be in the prices array
//function calculateCartPrice(...prices, val1, val2) {}
//this would be invalid, rest parameter must be the last parameter

const user ={
    username: "Mio",
    pricePerItem: 30,
    quantity: 5,
}

function handleObject(anyObject) {
    return `User ${anyObject.username} has to pay $${anyObject.pricePerItem * anyObject.quantity}`;
}

const objectMessage = handleObject(user);
console.log(objectMessage); //this would print "User Mio has to pay $150"

//type safety is important when working with functions, especially when dealing with objects
//you should always validate the input to ensure it has the expected structure and types

const objectMessage2 = handleObject({username: "Aio", pricePerItem: "30", quantity: 5});
console.log(objectMessage2); //this would print "User Aio has to pay $150" because of type coercion, but it is not ideal

//we can also pass arrays to functions

const myNewArray = [10, 20, 30, 40, 50];

function returnSecondValue(getArray) {
    return getArray[1]; //arrays are zero-indexed, so index 1 is the second value
}

console.log(returnSecondValue(myNewArray)); //this would print 20

//we can use destructuring to extract values from arrays or objects passed to functions
function destructureArray([first, second, third]) { //destructuring the array parameter
    return `First: ${first}, Second: ${second}, Third: ${third}`;
}
console.log(destructureArray(myNewArray)); //this would print "First: 10, Second: 20, Third: 30"    
