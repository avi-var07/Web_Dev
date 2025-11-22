const prompt = require('prompt-sync')();
function greeting(greet, Aviral){
    console.log("Hello, "+greet);
    Aviral(7);
}
let a = function(DOB){
    console.log("Good Morning: "+DOB);
}
let b=(DOB)=>{
    console.log("Good Night! "+DOB);
}

greeting("Aviral", a);
greeting("Aviral", b);

//Handling Errors: Asynchronous functions such as API, DB, file operations may fail!

function divide(a,b,callback){
    if(b===0)callback("Cannot divide by 0! ", null);
    else callback(null, a/b);
}

let divisor = prompt("Enter divisor: ");
let dividend= prompt("Enter dividend: ");

divide(dividend, divisor, function(err, res){
    if(err)console.log("Error hai: ", err);
    else console.log("Result: ", res);
})

