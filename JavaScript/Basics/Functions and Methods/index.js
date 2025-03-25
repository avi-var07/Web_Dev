function first(msg){    //function k andr jo pass hua wo parameter
    console.log(msg+" hello");

}
first("Aviral");
first("Ved");   //function call karte samei jo pass hua wo argument


function sum(x,y){
    return x+y;
}
console.log("Sums is: ",sum(3,4));
//Arrow functions: 

const sumOfTwo = (a,b)=> console.log( a+b);

sumOfTwo(3,4);  //7

const summation = (a,b) => a+b;

console.log(summation(3,5));    //8

const sum_of_two = (a,b)=>{
    return a+b;
}
console.log(sum_of_two(10,5));  //15


function countVowels(sent){
    let count=0;
    for(let i=0;i<sent.length;i++){
        let char = sent.charAt(i);
        if(char=='a'||char=='e'||char =='i'||char=='o'||char=='u')
            count++;
    }
    return count;
}
console.log(countVowels("Hii I am Aviral".toLowerCase()));

const count_Vowels = (sent)=>{
    let count=0;
    for(const char of sent){
        if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u')
            count++;
    }
    return count;
}
console.log(count_Vowels("Hii bhai mai aviral".toLowerCase()));

//for each loop:

//for each is a method, it is associated with an object. toUpperCase() is a method assocaited with Strings, forEach() is a method associated with Arrays

let arr = [1,2,3,4,5,6,7,8,9];
arr.forEach(val=>{
    console.log(val);
});
arr.forEach(function printElements(val){
    console.log(val);
});

arr.forEach((val,idx)=>{
    console.log(val,idx);
});
arr.forEach((val,idx,arr)=>{
    console.log(val,idx,arr);
});

//printing square of values using forEach loop:

let numbers = [1,2,3,4,5,6,7,8,9,10];

numbers.forEach(val=>{
    console.log(val*val);
}) ;


//map

let newArr = numbers.map(val=>{
    return val*val;
});
console.log(newArr);

//filter

let newArray = numbers.filter(val=>{
    return val%2==0;
});
console.log(newArray);

//reduce

let output = numbers.reduce((result,current)=>{
    return result+current;
});
console.log(output);

//check for largest element:

const ans = numbers.reduce((res,val)=>{
    return res>val?res:val;
});

console.log(ans);

let num = prompt("Enter a number please: ");

let user_array = [];
for(let i=0;i<num;i++){
    user_array[i]=i+1;
}

let sumOfElements = user_array.reduce((res,val)=>{
    return res+val;
});
console.log(user_array);
console.log("sum up to n is: "+sumOfElements);
let product = user_array.reduce((res,val)=>{
    return res*val;
});
console.log("product up to n is: "+product);

//Shopping cart : user continuously adds items and we don't know how many:

//we use rest operator to handle such situations: (rest is same as spread operator but it is used in function arguments) ye ek array mei daaldega saare values
function calculatePrice(val1,val2,...num1){ //ek value aayegi val1, ek value aayegi val2, baaki saari values num1 mei daaldega
    console.log(val1,val2,num1);
    let sum = 0;
    for(const val of num1){
        sum+=val;
    }
    return sum;

}

console.log(calculatePrice(1,2,3,4,5,6,7,8,9,10));


const user = {
    username: 'aviral',
    price : 10000
}

function handleObject(anyobject){
    console.log(`username is: ${anyobject.username} and price is: ${anyobject.price}`);
}

handleObject(user);
handleObject({

    username: 'ved',
    price: 20000
})

//for arrays:


const array = [ 1,2,3,4,5,6,7,8,9,10];
function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(array));
console.log(returnSecondValue([200,400,600,800,1000]));