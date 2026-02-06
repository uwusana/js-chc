//for loop
let array=[3,2,6,4,7,9]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}
//console.log(element) -> will not work because its out of scope


//if-else within a for loop
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5) console.log("5 is the best number");
    console.log(element);   
}

//nested for loops

for (let i = 1; i <= 10; i++) {
    console.log(`TABLE OF: ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop value: ${j} and inner loop ${i}`);
        console.log( i + '*' + j + '=' + i*j);
        
    }   
}

//break and continue keyword

for (let index = 1; index <= 20; index++) {
    if(index==5){
        console.log(`detected 5`);
        break; //exits the loop block and ignores the rest of the code block
    }
   console.log(`Value of i is: ${index}`);
}

for (let index = 1; index <= 20; index++) {
    if(index==5){
        console.log(`detected 5`);
        continue; //ignore printing 5
    }
   console.log(`Value of i is: ${index}`);
}
