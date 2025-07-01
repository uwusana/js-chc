/*based on how data is stored in the memory and accessed, it is categoried into two types:
1.primitive (call by value) :string,number,boolean,null(empty),undefined,symbol,BigInt
2.non primitive (call by reference): array, objects, functions

JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly.
*/

//PRIMITIVE DATA TYPES
//====================
const score = 100 //data type isnt defined
const scoreValue = 100.3
const isLoggedIn= false
const outsideTemp=null
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

const bigNumber = 45346825685687629n  //bigInt


//NON PRIMITIVE DATA TYPES
//========================

const sanrio = ["hello kitty", "kuromi", "my melody"];
let myObj={             //objects are stored inside curly braces
    name:"mio",
    age:"22",
}

const myFunction =function(){
    console.log("hello everynyan")
}

console.log(typeof bigNumber); //bigint
console.log(typeof myFunction);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//STACK(primitive) AND HEAP(non primitive) MEMORY

let myYoutubename = "uwusanadotcom" //stored in stack

let anothername = myYoutubename
anothername = "miomommydotcom"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}                               //stored in heap

let userTwo = userOne

userTwo.email = "mio@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// stack provides copy of data and heap provides reference of original data. So whenever there is a change in data stored in heap it is reflected both in the og variable as well as the new variable.
// however in stack stored data, the original variable is reserved as it provided a copy of itself