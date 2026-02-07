const coding = ["js","ruby","java","cpp","python"]

//FOR EACH LOOP
coding.forEach( function(item){
    console.log(item);
    
})

coding.forEach((value)=>{
    console.log(value);
}    )

//arrayname.forEach(funtion(parameter){})
/*arrayname.forEach(() => {})
*/


function printme(item){
    console.log(item);
    
}
coding.forEach(printme) //NOT ->coding.forEach(printme())

coding.forEach((item, index, arr)=>{
    console.log(item, index, arr);
    
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "JAVA",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
    
})