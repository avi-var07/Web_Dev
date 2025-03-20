let a = prompt("Guess a number (0-100): ");
let num = 25;
let count=1;
while(a!=num){
    if(a<num) a= prompt("Guess higher please: ");
    else if(a>num) a=prompt("Guess lower please: ");

    count++;

}

alert("Correctly Guessed in: " + count + " attempts");