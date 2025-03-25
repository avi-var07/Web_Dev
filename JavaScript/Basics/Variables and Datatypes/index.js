console.log("Aviral Varshney"); //Go live krk inspect pe console pe jaakr milega ye likha hua
myname= "Aviral Varshney";
console.log(myname);
age = 19;
cgpa = 8.9;
//let is block scoped, cannot be redeclared but can be updated
//const is block scoped, cannot be redeclared or updated
//var is globally scoped, can be redeclared and updated
let x=null;
let y=undefined;
value = true;
let fullName = "Aviral Varshney"; //let cannot be redclared but can be updated. (Global Scoped)
let a = 10;
console.log(typeof a); //number
console.log(typeof x);   //object
console.log(typeof y);   //undefined
console.log(typeof value);   //boolean
console.log(typeof fullName);   //string
console.log(typeof cgpa);   //number
let big  = BigInt(1234567890123456789012345678901234567890);
console.log(big);
console.log(typeof big);   //bigint
const student = {
    Name : 'Aviral Varshney',
    Age : 19,
    CGPA : 8.9,
    isMale : true,
};
console.log(student);
console.log(typeof student);   //object
console.log(student.Name);   //Aviral Varshney
student.Age+=1;
console.log(student["Age"]);   //20



//meaning of block scoped and globally scoped

if(true){
    let z = 10;
    var w = 4000;
}
console.log(w);   //4000
//console.log(z);   //error

//var bahar aajayega but let nhi aayega, var globally scoped hai, let block scoped hai


var c=300;
if(true){
    c=400;
}
console.log(c);   //400
//bc aana to 300 chahiye, lekin iski maa ka, 400 aaya, ab bc pehle wala c hi nhi hai, to 400 aayega, smjhe?



