//---------control flow in JAVA SCRIPT-------------
//1. if
const isUserLoggedIn = true;
const temperature = 30;
//------------------------------------------------------------------------------
//comparators : ==(equal), ===(strict equal), !=(not equal), !==, >, <, >=, <=


if (isUserLoggedIn) { //if block will only run if the condition is true
    console.log("This is true");
}
if(3!=2){
    console.log("3 is not equal to 2");
}
if(2=="2"){
    console.log("2 is equal to '2' with type coercion");
}
if(2==="2"){ //data types are different, so this condition is false
    console.log("2 is strictly equal to '2'");
}
if(2!==2){
    console.log("2 is not strictly equal to 2");
}
//------------------------------------------------------------------------------
if(temperature >= 30){
    console.log("The temperature is above 30 degrees");
}
console.log("The temperature is below 30 degrees"); //this line will always run regardless of the if condition thats why we use else if and else

//------------------------------------------------------------------------------
//2. if...else if...else
if(temperature > 30){
    console.log("The temperature is above 30 degrees");
} else if(temperature === 30){
    console.log("The temperature is exactly 30 degrees");
} else {
    console.log("The temperature is below 30 degrees");
}
//------------------------------------------------------------------------------

const score = 200

if(score>100){
    const power = "fly"
    console.log(`User Power : ${power}`);   
}
//console.log(`User Power : ${power}`); //ReferenceError: power is not defined
//the variable 'power' is block scoped and cannot be accessed outside the if block
//------------------------------------------------------------------------------

//short hand if...else (ternary operator)
const balance = 1000

//if(balance > 500) console.log("You have sufficient balance"), console.log("Enjoy shopping!"); 
//both statements will run if condition is true BUT this is not a good practice

//better way using ternary operator
balance > 500 ? console.log("You have sufficient balance") : console.log("Insufficient balance");
//------------------------------------------------------------------------------

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromFacebook=true;

//3. Logical operators : &&(AND), ||(OR), !(NOT)
if(userLoggedIn && debitCard){ //both conditions must be true to enter the if block
    console.log("You can make a purchase");
}

if(loggedInFromGoogle || loggedInFromFacebook){ //at least one condition must be true to enter the if block
    console.log("User logged in via social media");
}
