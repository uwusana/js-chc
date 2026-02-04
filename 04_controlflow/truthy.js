const userEmail = "mio@meow.ai"

if(userEmail){
    console.log("User email acquired");
    
} else {
    console.log("User email not available");
}

//In JavaScript, certain values are considered "truthy" or "falsy" when evaluated in a boolean context.
//Truthy values evaluate to true, while falsy values evaluate to false.

//Falsy values in JavaScript include:
//1. false
//2. 0 (zero)
//3. "" (empty string)
//4. null
//5. undefined
//6. NaN (Not a Number)
//7. -0 (negative zero)
//8. 0n (BigInt zero)

//All other values are considered truthy, including:
//"0" (string with a zero character)
//"false" (string with the text "false")
//[] (empty array)
//{} (empty object)
//function(){} (any function)
//" " (string with a space character)

const arr =[]
if(arr.length===0){
    console.log("Array is empty");
}

const myObj = {}
if(Object.keys(myObj).length === 0){
    console.log("Object is empty");
}
//Object.keys(myObj) returns an array of the object's own enumerable property names.


//Nullish coalescing operator (??): null or undefined -> provide a default value 
//safety net to assign a value when the left side is null or undefined 

let val1;
val1 = 5 ?? 10

console.log(val1); //5

let val2;
val2 = null ?? 10
console.log(val2); //10