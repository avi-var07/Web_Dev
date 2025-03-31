//IIFE (Immediately Invoked Function Expression)
//jaise hi function likha turnt hi execute karana ho
//application start hote hi, datatabase se connect ho jaye
 (function chai(){   //ye ek name IIFE hai, ye function ko naam de diya
    console.log("I am a chai");
 })();   //() apne aap call krta hai!!, pehle ()ye function ko apne andr wrap kr rha dusra () call kr rha

 //using arrow function:
 (() => {   //ye function ko naam nahi diya hai, ye anonymous function hai
    console.log("I am a biskoot");
 })();

 //to pass a argument to IIFE:
 ((fullName)=>{
   console.log(`Hello ${fullName}`);
 })("Aviral Ved Varshney");