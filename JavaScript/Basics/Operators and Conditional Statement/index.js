//This is the way to write a comment in JavaScript (single line comment)
/* This is the way to write a multi-line comment 
in 
JavaScript */
//Opearators in JavaScript
//Arithmetic Operators
let x=5,y=10;
console.log(x+y); //Addition
console.log(x-y); //Subtraction
console.log(x*y); //Multiplication
console.log(x/y); //Division
console.log(x%y); //Modulus
console.log(x**y); //Exponentiation
console.log(x++); //Increment
console.log(x--); //Decrement
//Assignment Operators
let a=5;
a+=5;
console.log(a);
a-=5;
console.log(a);
a*=5;
console.log(a);
a/=5;
console.log(a);
a%=5;
console.log(a);
a**=5;
console.log(a);
//Comparison Operators
let b=5,c=10;
console.log(b==c); //Equal to
console.log(b!=c); //Not equal to
console.log(b>c); //Greater than
console.log(b<c); //Less than
console.log(b>=c); //Greater than or equal to
console.log(b<=c); //Less than or equal to

let num = 5;
let num1 = "5";
console.log(num==num1); //true, javascript is loosely typed language (it implicitly converts the single into number)
console.log(num===num1); //false, it checks the type of the variable also, stricter than ==
//similiarly != and !==


//Logical Operators : multiple expressions are evalauted to a single boolean value:true or false
//Logical AND (&&)
//Returns true if both the operands are true
//Logical OR (||)
//Returns true if one of the operands is true
//Logical NOT (!)
//Returns true if the operand is false and vice versa
let d=true,e=false;
console.log(d && e); //false
console.log(d || e); //true
console.log(!d); //false
console.log(!e); //true

//Conditional statements
let age = 20;
if(age>=18) console.log("You are eligible to vote");
else console.log("You are not eligible to vote");

//if-else-if ladder
let marks = 80;
if(marks>=90) console.log("A grade");
else if(marks>=80) console.log("B grade");
else if(marks>=70) console.log("C grade");
else if(marks>=60) console.log("D grade");
else console.log("Fail");
//ternary operator
let age1 = 20;
console.log((age1>=18)?"You are eligible to vote":"You are not eligible to vote");

//Switch case
let day = 3;
switch(day){
    case 1: console.log("Sunday");
            break;
    case 2: console.log("Monday");
            break;
    case 3: console.log("Tuesday");
            break;
    case 4: console.log("Wednesday");
            break;
    case 5: console.log("Thursday");
            break;
    case 6: console.log("Friday");
            break;
    case 7: console.log("Saturday");
            break;
    default: console.log("Invalid day");
}
