// singleton->creating an object through constructor
//Object.create->singleton object


//OBJECT LITERALS:
const mySym = Symbol("key1")
const mySym2 = Symbol("key2")

const JsUser = {
    name: "Upasana",
    "full name": "Upasana Mukherjee", //cannot be acces using JsUser.full name or JsUser."full name"
    mySym:"mykey1", //turns into a string 
    [mySym2]:"mykey2", //remains a symbol
    age:22,
    location:"West Bengal",
    email: "upasana@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
//Note: name,age,etc-keys of object JsUser- are automatically treated as strings like "name" by JS. you can also define them as 0:"Upasana" and so on.

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email="upasana@mio.com"
//Object.freeze(JsUser) //no further changes can be made in object JsUser
JsUser.email="upasana@chatgpt.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

//console.log(JsUser.greeting); //returns [Function (anonymous)]
console.log(JsUser.greeting()); 
console.log(JsUser.greetingTwo()); 
