let score = "33"
let score1 ="33abc"
let value = null
let value1 = undefined

// console.log(typeof score); //done for the convenience of frontend to backend communication
// console.log(typeof score1);
// console.log(typeof value);
// console.log(typeof value1);

let valueInNumber = Number(score)
let valueInNumber1 = Number(score1)
let valueOfNull = Number(value)
let valueOfUndefined = Number(value1) 

// console.log(typeof valueInNumber);
// console.log(typeof valueInNumber1); //returns number but it is incorrect
// console.log( valueInNumber1); //returns NaN -> noy a number
// console.log(typeof valueOfNull);
// console.log(valueOfNull); //returns 0
// console.log(valueOfUndefined); //NaN

//notes
/*
"33"-> 33
"33abc" -> NaN
true -> 1 and false -> 0

*/

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); //returns true

//1-> true and 0 -> false
//"" -> false
//"string" -> true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(typeof stringNumber);
// console.log(stringNumber);

// ********************************Operations**********************************

let val = 3
let negVal =-val
//console.log(negVal);

// console.log(2+2);
// console.log(2*2);
// console.log(2**3);
// console.log(2%3);
// console.log(2/3);

let str1 ="hello"
let str2 = " mio"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(3+4*5%3); //not recommended for dev work

// console.log(true);
// console.log(+true); //performs incrementation but since it is a boolean value it returns 1 only
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++;
++gameCounter;
console.log(gameCounter);
// x++ says: "Give me the current value, then increment it."

// ++x says: "Increment first, then give me the new value."








