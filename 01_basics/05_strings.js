const name = "mio "
const repoCount = 50

// console.log(name + repoCount + " Value");-> not preferred in modern coding standards

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//the backticks `` (also called template literals) are used to create template strings—a more powerful and flexible way of working with strings compared to regular quotes (' or "). this is called string interpolation


//  creating a String object, not a primitive string.
const gameName = new String ('miouwu')

console.log(gameName[0]);

console.log(gameName.__proto__);

//It will log the prototype object of the String constructor, i.e., String.prototype, Which contains all the built-in string methods

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('w'));

//slicing
const newString = gameName.substring(0,4) //no negative values even if negative vakues are provided it will ignore and treat neg vals as 0
console.log(newString);

const anotherString = gameName.slice(-5,4) //negative values are supported, returns in reverse
console.log(anotherString);

const newStringOne = "  mioo   "
console.log(newStringOne);
console.log(newStringOne.trim());
//trim: remove whitespace and newlines

const url = "https://mio.com/mio%20uwu"

console.log(url.replace('%20', '-')); //what to search and what to replace with

console.log(url.includes('hello'));
const gameNameOne = new String("mio-uwu-gamer")

console.log(gameNameOne);
console.log(gameNameOne.split('-')); //returns array of strings splitting on the basis of '-'






