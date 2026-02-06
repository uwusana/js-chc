//while & do while
let index=0
while(index<=10){
    console.log(`Value of index is ${index}`);
    index=index+2; //must be such that the condition can be terminated after a point
}

let myArray =['kuromi', 'pochaco', 'keroppi']
let arr=0
while(arr<myArray.length){
    console.log(`Value is ${myArray[arr]}`);
    arr+=1;
}

//do while - executes atleast once regardless of condition being true or false
let score=11
do{
    console.log(`score is ${score}`);
    score++
}while(score<=10)