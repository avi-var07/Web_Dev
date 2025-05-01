const clock = document.querySelector('#clock');

setInterval(function(){ //setInterval is a function that executes the code inside it. mtlab kisi bhi code ko baar baar execute karne ke liye use hota hai.
let date = new Date();
clock.innerHTML = date.toLocaleTimeString();
}, 1000);   //har 5 second k baad time badlega screen par agar 5000 likha hai to, abhi 1000 likh rhe taaki ahr second show kre


const timeLeft = document.querySelector('#timeLeft');
const start = document.querySelector('#start');

let countDownInterval;

start.addEventListener('click', function() {
    const timer = parseInt(document.querySelector('#timer').value);
    clearInterval(countDownInterval); //clearInterval is a function that stops the interval set by setInterval.

    let time = timer; 

    if(isNaN(time) || time<=0)timeLeft.innerHTML = 'Please enter a valid number'; //agar time ki value number nahi hai ya 0 se chhoti hai to ye message show hoga
    else{
        countDownInterval  = setInterval(()=>{
            if(time<=0){ //agar time 0 ya usse chhota ho gaya to ye message show hoga
                clearInterval(countDownInterval); //interval ko clear kar do
                timeLeft.innerHTML = 'Time is up!'; //ye message show hoga
            }else{
                timeLeft.innerHTML = `Time Left: ${time} sec`; //time ki value ko timeLeft me store kiya
                time--; //time ki value ko 1 se ghata do
            }
        },1000);
    }
});
