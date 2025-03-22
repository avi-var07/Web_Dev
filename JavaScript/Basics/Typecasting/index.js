let a= "33abc";
let value = Number (a);
console.log(value); //NaN
console.log(typeof(value)); //number
let score = null;
console.log(Number(score)); //0
score = undefined;
console.log(Number(score)); //NaN
score = true;
console.log(Number(score)); //1

let isLoggedIn = "Aviral";
console.log(Boolean(isLoggedIn));   //true
isLoggedIn = "";
console.log(Boolean(isLoggedIn));   //false
isLoggedIn = true;
console.log(Boolean(isLoggedIn));   //true