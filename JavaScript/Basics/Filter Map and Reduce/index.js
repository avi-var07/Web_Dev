const coding = ["JavaScript", "Python", "Java", "C++", "Ruby"];

const values = coding.forEach((item)=>{
    console.log(item);
    return item;
})
console.log(values); // undefined
// The forEach method returns undefined, as it is not designed to return a value.
// It is used for executing a function on each element of the array, but it does not create a new array or return any value.
// The return value of the callback function inside forEach is ignored.


let myNums = [1,2,3,4,5,6,7,8,9,10];
let newNums = myNums.filter((num) => num>4)
console.log(newNums); // [5, 6, 7, 8, 9, 10]

//filter matlb jo true ho wo return hoga, jo false ho wo nahi hoga
//The filter method returns a new array containing all elements that pass the test implemented by the provided function.
// In this case, it returns a new array with all numbers greater than 4 from the original array myNums.

let newNums2 = myNums.filter((num)=>{
    num>4;
})

console.log(newNums2); // []
// The filter method returns an empty array because the arrow function does not have an explicit return statement.
//Agar scope start kr rhe to return likhna padega

let newNums3 = myNums.filter((num)=>{
    return num>4;
})
console.log(newNums3); // [5, 6, 7, 8, 9, 10]


const greaterThanFour = [];

myNums.forEach((num)=>{
    if(num>4){
        greaterThanFour.push(num);
    }
})

console.log(greaterThanFour); // [5, 6, 7, 8, 9, 10]



//on objects:

const books = [
    {
        title: 'Book 1',
        genre: 'Fiction',
        publish:1981,
        edition:2004,
    },
    {
        title: 'Book 2',
        genre: 'Non-Fiction',
        publish:1991,
        edition:2005,
    },
    {
        title: 'Book 3',
        genre: 'History',
        publish:1995,
        edition:2006,
    },
    {
        title: 'Book 4',
        genre: 'Science',
        publish:2000,
        edition:2007,
    },
    {
        title: 'Book 5',
        genre: 'Fiction',
        publish:2005,
        edition:2008,
    },
    {
        title: 'Book 6',
        genre: 'Non-Fiction',
        publish:2010,
        edition:2009,
    },
    {
        title: 'Book 7',
        genre: 'History',
        publish:2015,
        edition:2010,
    },
    {
        title: 'Book 8',
        genre: 'Science',
        publish:2020,
        edition:2011,
    },
]


let userBooks = books.filter((book)=> book.genre=='History')
console.log(userBooks); // [ { title: 'Book 3', genre: 'History', publish: 1995, edition: 2006 }, { title: 'Book 7', genre: 'History', publish: 2015, edition: 2010 } ]


userBooks = books.filter((book)=> { return book.publish>2000})
console.log(userBooks); /*[
    { title: 'Book 5', genre: 'Fiction', publish: 2005, edition: 2008 },
    {
      title: 'Book 6',
      genre: 'Non-Fiction',
      publish: 2010,
      edition: 2009
    },
    { title: 'Book 7', genre: 'History', publish: 2015, edition: 2010 },
    { title: 'Book 8', genre: 'Science', publish: 2020, edition: 2011 }
  ]*/


//map padhte hai

// map return krta hai


const nums = myNums.map((num)=>num+10);
console.log(nums); // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

//scope open krenge to undefiend undefiend aayega saare elements ki jgh
//scope mei return likhdo

 //chaining: 2-3 methods ko ek sath use karna, map().map().filter() etc etc



const newNumbers  =myNums.map((num)=>num*10).map((num)=>num+10).filter((num)=>num>50).map((num)=>num/10);

//chaining mein har kisi ka output dusre ka input bnega


//reduce

 const reduceArray = [1,2,3,4,5,6,7,8,9,10];
 const total = reduceArray.reduce(function (accumulator, currentValue){
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
    return accumulator + currentValue;
 },0)   // 0 is the initial value of the accumulator, agar 200 likhenge to 200 se shuru hoga, agar nahi likhenge to 0 se shuru hoga, mtlb final value 200 likhne pr 255 aayeg, pehle 200 fir 201, fir 203, fir 206....
console.log(total); // 55 aayega jo total sum hai, 255 tab aayega jab 200 se shuru krenge
//reduce ka use kisi bhi array ko ek single value mei convert karne ke liye hota hai, jaise sum, product, max, min etc etc


//chalo arrow function se likhte hai

const myTotal=reduceArray.reduce((acc, curr)=>(acc+curr),0)
console.log(myTotal); // 55
//yeh bhi wahi hai, arrow function se likha hai bas, aur return nahi likhna pada kyuki arrow function mei agar sirf ek hi line ho to return nahi likhna padta


const shoppingCart = [
    {
        item: 'Shirt',
        price: 200,
        quantity: 2
    },
    {
        item: 'Pants',
        price: 300,
        quantity: 1
    },
    {
        item: 'Shoes',
        price: 500,
        quantity: 1
    },
    {
        item: 'Hat',
        price: 150,
        quantity: 3
    },
    {
        item: 'Socks',
        price: 50,
        quantity: 5
    },
]

const totalPrice = shoppingCart.reduce((acc,item)=>acc+(item.price*item.quantity),0);
console.log(totalPrice); //1900