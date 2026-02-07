const myobject = {
    js: "javascript",
    cpp: "c plus plus",
    rb: "Ruby",
    swift: "Swift by apple"
}

for (const key in myobject) {
   console.log(key);//get keys
   
    console.log(myobject[key]);//get values
    
    console.log(`${key} is shortcut for ${myobject[key]}`); //get both keys and values
    
}

//does forin loop work for arrays too?

const programming =["js", "java", "ruby", "cpp"];

for (const key in programming) {
    console.log(key); //prints index as keys
    console.log(programming[key]); //prints actual values       
}

//forin loop for maps??
const map = new Map(); //key value pairs, stores unique  values and also follows insertion order
map.set('IN', "India")
map.set('CA', "Canada")
map.set('FR',"France")

for (const key in map) {
    console.log(key); //no output
}

//maps arent iteratable so forin will not work for maps