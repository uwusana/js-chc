const myNums = [1,2,3,4,5];

const myTotal= myNums.reduce((accumulator, currentValue) => {
    console.log(`acc: ${accumulator} and currval: ${currentValue}`);
    
    return accumulator + currentValue;
}, 0)

console.log(myTotal);

//reduce is a powerful array method that takes a callback function and an optional initial value. The callback function is executed on each element of the array, and it takes two arguments: the accumulator and the current value. The accumulator is the accumulated result from the previous iterations, and the current value is the current element being processed in the array. The reduce method processes each element of the array and returns a single output value, which is the final result of the reduction operation. In this example, we are summing up all the numbers in the myNums array, starting with an initial value of 0 for the accumulator.

/* If you're:

Just transforming each element → use map()

Just filtering → use filter()

Combining everything into one result → reduce() is your weapon.

*/

const myTotalTwo = myNums.reduce( (acc,curr) => acc+curr,0)
console.log(myTotalTwo);

const myShpoppingCart = [
    {
        itemName:"js course",
        price: 2999
    },
    {
        itemName:"python course",
        price: 999
    },
    {
        itemName:"spring course",
        price: 3999
    }
]

const pricetoPay = myShpoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(pricetoPay);
