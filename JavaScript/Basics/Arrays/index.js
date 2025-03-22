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
