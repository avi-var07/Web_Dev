const user={
    username: 'aviral',
    password: 'password',
    welcomeMessage: function(){
        console.log(`${this.username} is logged in and we welcome you`);    //this matlb current context
        console.log(this);  /*{
            username: 'ved',
            password: 'password',
            welcomeMessage: [Function: welcomeMessage]
          }*/
    }
}

user.welcomeMessage();  //aviral is logged in and we welcome you
user.username='ved';
user.welcomeMessage();  //ved is logged in and we welcome you  

console.log(this);  //{}  

function chai(){
    let username='ved';
    console.log(this.username);  //undefined
}
chai(); 

const chai1=()=>{   //arrow function
    let username='ved';
    console.log(this.username);  //undefined

}

//syntax of arrow function: 
//() => {}  

const addtwo = (a,b) => {
    return a+b;
}
console.log(addtwo(3,4));  //7

//implicit return, single statement

const abc = (a,b) => (a+b);
console.log(abc(3,4));  //7

const abcd = (num1, num2) => ({username: 'ved'});  //object return karne ke liye parenthesis lagane honge

//agar parenthesis hai to return keyword likhna hoga, agar parenthesis nhi hai to maa chudaye return keyword


