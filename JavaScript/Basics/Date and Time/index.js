let mydate = new Date();
console.log(mydate.toString()); //Sun Mar 23 2025 23:27:28 GMT+0530 (India Standard Time)
console.log(mydate.toDateString()); //Sun Mar 23 2025
console.log(mydate.toISOString());  //2025-03-23T17:59:13.178Z
console.log(mydate.toJSON());   //2025-03-23T17:59:13.178Z
console.log(mydate.toLocaleDateString());   //23/3/2025
console.log(mydate.toLocaleString());   //23/3/2025, 11:29:13 pm
console.log(mydate.toTimeString()); //23:29:13 GMT+0530 (India Standard Time)
console.log(typeof mydate);//object

//to create own date:

let myowndate = new Date(2023,0,23);    //month starts with 0-index   
console.log(myowndate.toString());  //Mon Jan 23 2023 00:00:00 GMT+0530 (India Standard Time)
myowndate = new Date(2023,0,23,5,3,6); 
console.log(myowndate.toString());  //Mon Jan 23 2023 05:03:06 GMT+0530 (India Standard Time)
myowndate = new Date("2023-1-14"); //months start 1-index
console.log(myowndate.toString());//Sat Jan 14 2023 00:00:00 GMT+0530 (India Standard Time)

let mytimestamp = Date.now(); //from 1970, milliseconds
console.log(mytimestamp);
console.log(myowndate.getTime());
//to convert to seconds:
console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);

console.log(newDate.toLocaleString('default',{      //toLocaleString() date ko humans k smjhne format mei convert krta hai, weekday long ka mtlb hai to poora weekday ka naam aayega, sun ki jgh sunday, hindi mei chahiye to default ki jgh pe 'hi-IN' likh dene se aayega "रविवार"
    weekday: "long",
}));