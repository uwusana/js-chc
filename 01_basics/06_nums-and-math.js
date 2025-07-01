const score = 400 
const balance = new Number(100)
console.log(balance); //specifies type
console.log(score);  //only value

console.log(balance.toString());
console.log(typeof balance);
console.log(balance.toFixed(2));

// What toFixed(2) Does:
//     Rounds the number to 2   digits after the decimal point.
//     Returns a string, not a number.

const otherNumber=69.6969
console.log(otherNumber.toPrecision(3));
//toPrecision(n) formats a number to n significant digits (not just digits after the decimal).

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
//This adds commas or separators based on your system's locale (regional format) — making numbers easier to read.

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)

//+++++++++++++++++++MATHS++++++++++++++++++++++