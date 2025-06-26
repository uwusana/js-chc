/*based on how data is stored in the memory and accessed, it is categoried into two types:
1.primitive (call by value) :string,number,boolean,null,undefined,symbol,BigInt
2.non primitive (call by reference): array, objects, functions

JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly.
*/
const score = 100 //data type isnt defined
const scoreValue = 100.3
const isLoggedIn= false
const outsideTemp=null
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);





