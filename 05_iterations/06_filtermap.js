const coding = ["js","ruby","java","cpp","python"]

const values = coding.forEach( (item) => {
    console.log(item);
    return item;
})

console.log(values); //undefined->for each loop doesnt return any values

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => num > 5)
console.log(newNums); //this will return the elements validating the condition

/*
    const newNums = myNums.filter( (num) => {
        num > 5
    })
This will return empty array [] because {} starts a scope and it returns an object instead, so we need to write  return num > 5

Correct way if using {} scope:
    const newNums = myNums.filter( (num) => {
        return num > 5
    })
*/


//filter: Returns the elements of an array that meet the condition specified in a callback function.

const book = [
    { title: 'Book One', genre: 'Romance', publish: 1940},
    { title: 'Book Two', genre: 'Science', publish: 2011},
    { title: 'Book Three', genre: 'History', publish: 2000},
    { title: 'Book Four', genre: 'Thriller', publish: 1990},
    { title: 'Book Five', genre: 'Fiction', publish: 2007},
    { title: 'Book Six', genre: 'Science', publish: 2019},
    { title: 'Book Seven', genre: 'Non-Fiction', publish: 1987},
    { title: 'Book Eight', genre: 'Sci-Fi', publish: 2022},
    { title: 'Book Nine', genre: 'History', publish: 1998}
];

let userBooks = book.filter( (bk) => bk.genre=== 'History')
userBooks = book.filter( (bk) => bk.publish >= 2000  && bk.genre==='History')
console.log(userBooks);
