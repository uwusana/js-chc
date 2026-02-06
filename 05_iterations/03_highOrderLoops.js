//Thhe following loops are array specific in some way

//1.for of:

const arr=[1,2,3,4,5]

for (const element of arr) {
    console.log(element);
}

//works for strings also (and objects and more)
const str = "Hey Mio!"
for (const greet of str) {
    console.log(`each char is ${greet}`);
}

//Maps

const map = new Map(); //key value pairs, stores unique  values and also follows insertion order
map.set('IN', "India")
map.set('CA', "Canada")
map.set('FR',"France")

console.log(map);

for(const key of map){
    console.log(key);
    // /[ 'IN', 'India' ]
    //[ 'CA', 'Canada' ]
    //[ 'FR', 'France' ]
}

for(const [key, value] of map){
    console.log(key, ':-', value);
    /* 
        IN :- India
        CA :- Canada
        FR :- France
    */
}


/*
const myObj = {
    'game1' : 'GENSHIN IMPACT',
    'game2' : 'ZZZ'
}

for (const [key, value] of myObj) {
    console.log(key, ':-', value);
} //doesnt work for objects
*/