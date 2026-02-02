const user = {
    username: "Mio",
    price:999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // 'this' refers to the user object here-current context
        //console.log(this); //prints the user object when welcomeMessage is called outside as a method of user object        
    }


}
user.welcomeMessage() // Mio , welcome to website
user.username="Alice"
user.welcomeMessage() // Alice , welcome to website 

console.log(this); //in a browser, 'this' here refers to the global window object, and it will give an empty object in Node.js 


//ARROW FUNCTIONS AND 'this'

// function chai(){
//     let username="Mio";
//     //console.log(this);
//     console.log(this.username); // this will be undefined here in Node.js, in browser it will refer to window object and print undefined as window.username is not defined, this.username will only work in method of an object
// }

// chai(); //output here will not be an empty object in browser, it will be the window object and its properties


// const chai = () => {
//     let username = "Mio";
//     console.log(this); //empty object in Node.js, window object in browser
//     console.log(this.username); //undefined in both Node.js and browser
// }
//chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(3, 5)); //8

const addTwo = (num1, num2) =>  num1 + num2; //implicit return-react important for concise code

const add = (num1, num2) => ({username: "Mio", total: num1 + num2}); //returning an object from arrow function. MUST WRAP IN () TO AVOID SYNTAX ERROR

console.log(addTwo(3, 5));

const myArr = [1, 2, 3, 4, 5];
myArr.forEach(function() {}); //traditional function expression
myArr.forEach(() => {}); //arrow function expression

//ARROW FUNCTIONS DO NOT HAVE THEIR OWN 'this' CONTEXT
const user2 = {
    username: "Mio",
    price: 999,
    welcomeMessage: () => {
        console.log(`${this.username} , welcome to website`);
        // 'this' here does not refer to user2 object, it refers to the outer scope (global scope in this case)
        //console.log(this); //prints empty object in Node.js, window object in browser
    }   
}
user2.welcomeMessage(); //undefined , welcome to website

