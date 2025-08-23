//dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);

//let myCreatedDate1 = new Date(2025, 0, 23)
//let myCreatedDate2 = new Date(2025, 0, 23, 5, 3)
//month starts fRom 0

let myCreatedDate = new  Date("01-04-2025")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

//-----convert to miliseconds---
//console.log(Date.now()/1000) //decimal value
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.getDate());
//---string interpolation---
`${newDate.getDate()}and the time `

newDate.toLocaleDateString('default',{
    weekday: "long",
    //timeZone: ''
})
