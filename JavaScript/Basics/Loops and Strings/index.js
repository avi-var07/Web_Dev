//for loop:
for(let i=1;i<=10;i++){
    console.log(i);
}
//while loop
let i=1;
while(i<=10){
    console.log(i);
    i++;
}
//do-while loop
let j=1;
do{
    console.log(j);
    j++;
}while(j<=5);
//for-of loop and for-in loop
//for-of loop is for string and arrays iteration
let str = "Aviral Varshney";
for(let i of str) console.log(i);

//for-in loop is for iteration over objects
const student={
    name:"Aviral",
    cgpa:8.9,
};
for(let i in student) console.log(i); //prints keys
for(let i in student) console.log("key is",i," and value is: ",student[i]); //prints keys and values

//Strings

let str1 = "Hii";
console.log(str1);
console.log(str1.length);
//template literal in strings
let str2 = `Hii hello`;
console.log(typeof str2);   //string

const item = {
    name : "Gel",
    cost:50,
};
let  out = `name of pen is ${item.name} and cost is ${item.cost}`;
console.log(out);