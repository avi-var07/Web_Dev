const mysym= Symbol("This is my symbol 1");
const student = {
    name:"Aviral",
    age:19,
    mail: "aviralvarshney07@gmail.com",
    location: "Varanasi",
    [mysym]: "This is my symbol 2",
    "full name": "Aviral Varshney",
};
console.log(student[mysym]); // This is my symbol 2

console.log(student[Symbol("This is my symbol 1")]); // undefined
console.log(student[Symbol("This is my symbol 2")]); // undefined
console.log(student["name"])    // Aviral
console.log(student.age)    // 19
//in both line 13 and 14 is correct way to access, but line 13 is more better because:
console.log(student["full name"])    // Aviral Varshney
//console.log(student.full name)    // SyntaxError: Unexpected identifier

student["mail"]="aviral.varshney23@lpu.in";
console.log(student["mail"]);    //aviral.varshney23@lpu.in
//to freeze such that no modification can be done:
Object.freeze(student);
student["mail"]="aviral.varshney@chatgpt.com";
//there will be no error, but the mail will not be updated
console.log(student);   /*
{
  name: 'Aviral',
  age: 19,
  mail: 'aviral.varshney23@lpu.in',
  location: 'Varanasi',
  'full name': 'Aviral Varshney',
  [Symbol(This is my symbol 1)]: 'This is my symbol 2'
}
*/


