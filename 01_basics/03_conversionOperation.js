let score = "33"
let score1 ="33abc"
let value = null
let value1 = undefined

console.log(typeof score); //done for the convenience of frontend to backend communication
console.log(typeof score1);
console.log(typeof value);
console.log(typeof value1);

let valueInNumber = Number(score)
let valueInNumber1 = Number(score1)
let valueOfNull = Number(value)
let valueOfUndefined = Number(value1) 

console.log(typeof valueInNumber);
console.log(typeof valueInNumber1); //returns number but it is incorrect
console.log( valueInNumber1); //returns NaN -> noy a number
console.log(typeof valueOfNull);
console.log(valueOfNull); //returns 0
console.log(valueOfUndefined); //NaN

//notes
/*
"33"-> 33
"33abc" -> NaN
true -> 1 and false -> 0

*/

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //returns true

//1-> true and 0 -> false
//"" -> false
//"string" -> true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);
