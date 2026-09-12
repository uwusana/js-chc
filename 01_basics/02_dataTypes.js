"use strict";  //treat all JS code as newer version, currently by default JS runs in strict mode

//alert(3+3) ->we are using nodejs and not browser, alert() is mainly used to print stuff inside browser since js engine is hidden inside a browser.

//console.log(3+3); console.log("mio") // code readability is bad, always maintain proper code readability

let name ="mio" //string data type
let age= 22 //number data type
let isLoggedIn = false //boolean data type
let state; //undefined (value is not assigned)
let state1=null; //null type => empty

// number =>2^52
//bigint for bigger numbers
//string =>""
//boolean=> true or false
//null => standalone value in js
//undefined => is a type itself
//symbol=> unique

//object

console.log(typeof "mio");  //obtain the data type of an element
console.log(typeof null);  // returns object
console.log(typeof undefined);  //returns undefined


/*
    - JavaScript is case-sensitive and uses the Unicode character set
    - Conceptually, undefined indicates the absence of a value, while null indicates the absence of an object
    - The Number type is a double-precision 64-bit binary format IEEE 754 value.
    - NaN ("Not a Number") is a special kind of number value that's typically encountered when the result of an arithmetic operation cannot be expressed as a number.
*/