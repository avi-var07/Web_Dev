const user = new Object(); //this is skelton object
const user1 = {}; //this is object literal
user1.name = "Aviral";
user1.age = 19;
user1.email = "helllo@hi.com";
user1.isLoggedIn = false;
console.log(user1); //{ name: 'Aviral', age: 19, email: 'helllo@hi.com', isLoggedIn: false }
const regularuser = {
    fullname:"Aviral Varshney",
    newname: {
        userFullname:{
            firstName:"Aviral",
            lastName:"Varshney",
        }
    }
};
console.log(regularuser.newname.userFullname.firstName); //Aviral

const obj1={
    1:"a",
    2:"b",
}
const obj2={
    3:"c",
    4:"d",
}
const obj5={ 5:"a", 6:"b"};
const obj3={ obj1,obj2};
console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
const obj4 = Object.assign({},obj1,obj2); //first parameter is target object and rest are source objects, it is optional to have target object

console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj7 = Object.assign({},obj1,obj2,obj5);  
console.log(obj7); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'a', '6': 'b' }

//most used is: spread

const obj8 = {...obj1,...obj2,...obj5};
console.log(obj8); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'a', '6': 'b' }


//jab database se value aayegi:

const users = [
    {
        id :1,
        email:"user@gmail.com"
    },
    {
        id :2,
        email:"user1@gmail.com"
    },
]
console.log(users[1].email); //user1@gmail.com

//to access all keys of an object:

console.log(Object.keys(user1));    //[ 'name', 'age', 'email', 'isLoggedIn' ]
//to access all values of an object:
console.log(Object.values(user1)); //[ 'Aviral', 19, 'helllo@hi.com', false ]

// console.log(Object.length(user1)); undefined because length is not a function of object, it is a property of array, so we can't use it with object, we can use it with array, string, etc.

//to access all keys and values of an object:
console.log(Object.entries(user1)); //[ [ 'name', 'Aviral' ], [ 'age', 19 ], [ 'email', 'hello@hi.com' ], [ 'isLoggedIn', false ] ]

//to check if a key is present in an object or not:
console.log(user1.hasOwnProperty("name")); //true
console.log(user1.hasOwnProperty("address")); //false