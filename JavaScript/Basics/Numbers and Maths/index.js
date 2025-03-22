const num = new Number(100);
const a=100;
console.log(a); //100
console.log(typeof a);  //number
console.log(num);   //[Number: 100]
console.log(typeof num);    //object
console.log(num.toString().length); //3
console.log(num.toFixed(2));    //100.00

const anotherNumber = 23.8966;
console.log(anotherNumber.toPrecision(4));  //23.90
const hundreds = 10000000;
console.log(hundreds.toLocaleString()); //1,00,00,000

console.log(Math.abs(-7));  //7
console.log(Math.ceil(4.3));    //5

console.log(Math.random()); //return in decimals
console.log(Math.floor(Math.random()*10)+1); //+1 to handle 0
//for range:

const min = 10;
const max=  20;

console.log(Math.floor(Math.random()*(max-min+1))+min); //always between 10 and 20