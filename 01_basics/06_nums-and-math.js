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
console.log(Math);
console.log(Math.abs(-4)); //negative -> positive only
console.log(Math.round(4.3));
console.log(Math.ceil(4.3)); //not used much
console.log(Math.floor(4.3)); //not used much
console.log(Math.min(4, 5 ,2, 7));

console.log(Math.random()); //values will always be between 0 and 1
console.log((Math.random() * 10) +1); 
console.log(Math.floor(Math.random() * 10) +1); //to get only one digit

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //to get random numbers within a range


