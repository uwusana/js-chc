const myNumbers = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10]

//add 10 to every number in myNumbers array
const newNums = myNumbers.map( (num) => num + 10)

console.log(newNums);

//map: Calls a defined callback function on each element of an array, and returns an array that contains the results.



//chaining:
const newNumbers = myNumbers
                    .map((num) => num*10)
                    .map( (num) => num+1)
                    .filter((num) => num >= 40)
console.log(newNumbers);
