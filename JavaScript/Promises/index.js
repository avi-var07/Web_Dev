//basic syntax of promises: 

// let a = new Promise((resolve, reject)=>{
//     let b=true;
//     if(b)resolve("Done");
//     else reject("Sorry!");
// });


//Suppose: 

let a = new Promise((resolve, reject)=>{
    
    setTimeout(()=>{
        console.log("Being Resolved!");
        resolve("Done");
        },5000)
});
let a1 = new Promise((resolve, reject)=>{
 
    setTimeout(()=>{
        console.log("Being Rejected!");
        reject(new Error ("This is an error"));
        },5000)
});


// both a and a1 runs parallely!