// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// these comparisons are easy to understand

//problem occurs when comparing different data types

// console.log("2">1);
// console.log("02">1); 
//result is not predictable
//AVOID
// console.log(null>0); //f
// console.log(null==0); //f
// console.log(null >=0); //t

/*the reason is that an equality check == and comparisons <>>=<= work differently.
comaprisons convert null to a number, treating it as 0. that is why null>=0 is true and nul>0 is false */
//AVOID
// console.log(undefined==0); //always false
// console.log(undefined>0); //always false
// console.log(undefined<0); //always false

// === -> strict check(checks data type as well as values)

// console.log("2" == 2); //true
// console.log("2" === 2); //false




