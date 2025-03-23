let students = ["Aviral","Ved","Varshney"];
console.log(students);
console.log(students.length);
for(let student of students) console.log(student.toUpperCase());
//Array methods
let food = ["Burger","Noodles","Roti"];
console.log(food);
food.push("Rotis");
console.log(food);
let deleted = food.pop();
console.log(food);
console.log("Item deleted: "+deleted);
console.log(food.toString());
let drinks = ["Coldrink","Sprite","Roti","Cocacola","chocolate"];
let merged = food.concat(drinks);
console.log(merged);   // ['Burger', 'Noodles', 'Roti', 'Coldrink', 'Sprite', 'Roti] same sequence is followed
drinks.unshift("Khana");
console.log(drinks);
let deleted_item = drinks.shift();
console.log(deleted_item);
console.log(drinks);
console.log(drinks.slice(1,3)); //['Sprite', 'Roti']
let numbers = [1,2,3,4,5,6,7,8,9];
console.log(numbers.splice(3,4,10,11)); //startindex is 3, delete 4 elemennts starting from index 3 and add 10 and 11 at index 3 and 4. 
//output of line 24 is [4,5,6,7] which are the removed elements.
console.log(numbers) //[1, 2, 3, 10, 11, 8, 9]
//if passed only the starting index, i.e, numbers.splice(4) suppose, then it will delete all the elements starting from index 4.
let companies  = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift();  //remove first element
console.log(companies);
companies.splice(1,1,"Ola");//instead of uber, add ola
console.log(companies);
companies.push("Amazon");//add amazon at end
console.log(companies);


console.log(numbers.includes(9));   //true;

console.log(numbers.indexOf(9));    //6

const newArr = numbers.join();  //this is now converted to string

console.log(numbers);       //[1,2,3,10,11,8,9]
console.log(typeof numbers);    //object
console.log(newArr);    //1,2,3,10,11,8,9
console.log(typeof newArr); //string


//difference between slice and splice: Slice does not modifies the original array whereas splice modifies the original array, slice returns a new array with the extracted elements whereas splice returns the removed  elements(if any) as an array
//syntax of splice: array.splice(start, deleteCount, item1, item2, ...)


//spread operator

let marvel = ['ironman','doctor strange', 'hulk'];
let dc = ['superman','batman','flash'];

const all_hero = [...marvel, ...dc];

console.log(all_hero);  //[ 'ironman', 'doctor strange', 'hulk', 'superman', 'batman', 'flash' ]

let name  = "Aviral";
console.log(Array.isArray(name));   //false


console.log(Array.from(name));  //[ 'A', 'v', 'i', 'r', 'a', 'l' ]

//interesting thing for interview below:

console.log(Array.from({name: "aviral"}))   // will returnb an empty array, i.e : [] because it doesn't know about it

let one = 100;
let two = 200;
let three = 300;
console.log(Array.of(one,two,three));   //[ 100, 200, 300 ]