const sanrio_chars = ["kuromi", "hello kitty", "my melody"]
const kon_chars=["mio", "azusa", "yui"]

// sanrio_chars.push(kon_chars)
// console.log(sanrio_chars); //array within an array
// console.log(sanrio_chars[3][1]);

const anime = sanrio_chars.concat(kon_chars) //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(anime);

const newAnime=[...kon_chars,...sanrio_chars]
console.log(newAnime); //...->spread, works similar to concat but preferred over it.

const anotherArray = [1, 2 , 3, [4, 5, 6], 7, [6, 7, [ 4, 5]]]

const real_anotherArray=anotherArray.flat(Infinity) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_anotherArray);


console.log(Array.isArray("upasana")); //check if soemthing is an array
console.log(Array.from("upasana")); //convert anyhing to an array
console.log(Array.from({name:"upasana"})); //returns an empty array, until you specify whether to convert keys or values of an object into an array

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1, score2, score3)); //Returns a new array from a set of elements.


