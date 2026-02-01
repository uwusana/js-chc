//we know there are three types of scopes in JavaScript: global, function, and block scope.
//global scope means a variable is accessible from anywhere in the code
//function scope means a variable is accessible only within the function it is defined in
//block scope means a variable is accessible only within the block (enclosed by {}) it is defined in

//and we have let, const, and var for variable declarations
//let and const are block scoped, while var is function scoped

let a=10; //global scope
const b=20; //global scope
var c=30; //global scope

console.log(a, b, c); //this is valid, all variables are accessible here

//but if we do:
if(true) {
    let d=40; //block scoped
    const e=50; //block scoped
    var f=60; 
    console.log(d, e, f); //this is valid, all variables are accessible here
}
//console.log(d, e, f); //this would throw an error because d, e, and f are block scoped and not accessible outside the if block

//var is function scoped, so it would be accessible outside the if block
console.log(f); //this would print 60
//but this is not a good practice, as it can lead to unexpected behavior and jeopardize code maintainability
//it's better to use let and const for variable declarations to avoid such issues


//NOTE: browser environments have a global object called 'window', while Node.js has a global object called 'global'. They're different from the global scope we discussed above. Variables declared with let and const do not become properties of these global objects.


//NESTED SCOPES

function one(){
    const username="Mio"; //function scope of one()

    function two(){
        const website="example.com"; //function scope of two()
        console.log(username); //this is valid, two() can access username from one()
    }
    //console.log(website); //this would throw an error, one() cannot access website from two()
    two();
}
one();

//its the same with if blocks as well, for example:
if(true){
    const color="blue"; //block scope of if block
    if(true){
        const shade="dark blue"; //block scope of inner if block
        console.log(color); //this is valid, inner if block can access color from outer if block
    } 
    //console.log(shade); //this would throw an error, outer if block cannot access shade from inner if block 
    console.log(color); 
}


//this is called lexical scoping, inner scopes can access variables from their outer scopes, but not vice versa

//CLOSURES
//a closure is a function that retains access to its outer scope even after the outer function has finished executing


//+++++++++INTERESTING++++++++++++++

console.log(addOne(5)); //this would print 6 because of FUNCTION HOISTING
//function declarations are hoisted, meaning they are available before their actual declaration in the code

function addOne(number){
    return number+1;
}
//addOne(5); //this would not print anything because we are not logging the result


console.log(addTwo(5)); //this would throw an error because addTwo is not defined yet
//function expressions are not hoisted, meaning they are not available before their actual declaration in the code

const addTwo = function(number){ //function expression
    return number+2;
}

//addTwo(5); //this would also not print anything because we are not logging the result