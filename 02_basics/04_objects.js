//const tinderUser = new Object() //singleton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name="Mio"
tinderUser.isLoggedIn= false

//console.log(tinderUser) //both singleton and non singleton objects will give the same output

const regularUser ={
    email : "hello@gmail.com",
    fullname : {
        userfullname : {
            firstname : "mio",
            lastname : "akiyama"
        }
    }
}

console.log(regularUser.fullname?.userfullname);
//fullname?->check if it(fullname) actually exists

//---- merge two objects ------
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = { obj1, obj2} 
console.log(obj3); //output:{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } -> same problem as array, objects nested within objects

const obj4 = Object.assign(obj1, obj2) //assign -> Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
console.log(obj4);

//BETTER SYNTAX: const obj4 = Object.assign({},obj1, obj2) here {} guarantees that it acts as a target and obj1 & obj2 acts as sources. if params are only (obj1, obj2) it means that obj2's content is assigned to obj1.

const obj5 = {...obj1, ...obj2} //spread operator most preferred
console.log(obj5);

const users = [
    {
        id : 1,
        email : "mio@gmail.com"
    },
    {
        id : 2,
        email : "meow@gmail.com"
    },
    {
        id : 3,
        email : "miau@gmail.com"
    }
]

users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
//both Object.keys & Object.values will return an array of keys and values of the selected objects, and can be accessed usin loops (useful in many ways)

console.log(Object.entries(tinderUser));
//Returns an array of key/values of the enumerable own properties of an object

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//returns a boolean value, checks whether a field is available in the specified object or not
