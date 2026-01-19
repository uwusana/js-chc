//array


    // JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)

    // JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.

    // JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.

    // JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

    //shallow copy=same reference point
    //deep copy= do not share the same reference

const myArr = [1, 2, 3, 4, 5]
const myArr1 = [1, 2, 3, 4, 5, true, "Mio"]
const myArr2= new Array(1,2,3,4)
console.log(myArr[0]);

// ARRAY METHODS

myArr.push(6) //insert an element at the end
console.log(myArr);
myArr.pop() //delete element at the end
console.log(myArr);

myArr.unshift(0) //insert at array start-> time consuming because of shifting following elements
console.log(myArr);
myArr.shift() // remove element from start
console.log(myArr);

console.log(myArr.includes(9)); //check if element is present in an array

console.log(myArr.indexOf(8)); //return -1 = not present
console.log(myArr.indexOf(3)); //return index of 3 cuz present


const newArr = myArr.join()

console.log(myArr);
console.log(newArr);
console.log(typeof newArr); //changes array to string comma separated

//SLICE, SPLICE

console.log("A ", myArr);

const myn1 = myArr.slice(1,3) //Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
console.log(myn1);
console.log("B ", myArr); //no changes in OG array

const myn2=myArr.splice(1, 3) //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(myn2);
console.log("C ", myArr); //OG array is changed









