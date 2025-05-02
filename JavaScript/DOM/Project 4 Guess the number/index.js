let randomNumber =  parseInt(Math.random()*100+1);

const submit  = document.querySelector("#submit");

const userGuess = document.querySelector("#guess");

const current = document.querySelector("#current");
const prev = document.querySelector("#prev");
const remain = document.querySelector("#remaining");
const LowOrHigh = document.querySelector("#LowOrHigh");
const startOver = document.querySelector("#startOver");

let prevGuess = [];
let numGuess = 0;

let playGame = true;

const p = document.createElement("p");
if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault();
        const guess = parseInt(userGuess.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){

    if(isNaN(guess))alert("Please enter a valid number");
    else if(guess<1)alert("Please enter a number greater than 0");
    else if(guess>100)alert("Please enter a number less than 100");
    else{
        prevGuess.push(guess);
        if(numGuess===10){
            displayGuess(guess);
            displayMessage(`Game Over! You have used all your guesses. Random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);

        }
    }

}
function displayMessage(msg){
    LowOrHigh.innerHTML=`<h2>${msg}</h2>`;

}
function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage("Congratulations! You guessed it right!");
        endGame();
    }
    else if(guess<randomNumber){
        displayMessage("Your guess is too low!");
    }
    else if(guess>randomNumber){
        displayMessage("Your guess is too high!");
    }
}
function displayGuess(guess){
    current.innerHTML=`Current Guess: ${guess}`;
    userGuess.value = "";
    prev.innerHTML+=`${guess},`;
    numGuess++;
    remain.innerHTML=`${10-numGuess} guesses remaining`;
}
function newGame(){
    const newGame = document.querySelector('#newGame');
    newGame.addEventListener("click", function(e){
        randomNumber = parseInt(Math.random()*100+1);
        prevGuess = [];
        numGuess = 1;
        current.innerHTML="";
        remaining.innerHTML=`${10-numGuess} guesses remaining`;
        userGuess.removeAttribute("disabled");
        startOver.removeChild(p);
        playGame = true;
    })


}
function endGame(){
    userGuess.value = "";
    userGuess.setAttribute("disabled", '');
    p.classList.add('button');
    p.innerHTML = `<button id="newGame" class="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Start New Game</button>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function displayPrevGuess(){

}