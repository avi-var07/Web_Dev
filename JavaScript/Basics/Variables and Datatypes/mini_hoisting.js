//Nested Scope
// Nested scope is when a scope is inside another scope. Here, the inner scope has access to the outer scope variables. But the outer scope does not have access to the inner scope variables.
function one(){
    const username = "aviral"
    function two(){
        const website =  "aviral.com";
        console.log(username);
    }
    //console.log(website); cannot be accessed
    two();
}
one();

function addOne(num){
    return num+1;
}
const addTwo = function(num){
    return num+2;
}
addTwo(5);
//with arrow function
const addThree = (num) => {
    return num+3;
}
//Hoisting
//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before code execution.
//Hoisting applies to variable declarations and to function declarations.
//Hoisting is JavaScript's default behavior of moving declarations to the top.
//Hoisting Example:

