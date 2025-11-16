let play = true;
while(play){
    let round = 1;
    let arr = ['S','W','G'];
    let comp = 0, user =0;
    while(round<=3){
        let comInput = arr[Math.floor(Math.random()*3)];
        let input = prompt("Enter S or W or G (Snake, Water, Gun) respectively: ").toUpperCase();
        if(comInput==input){
            alert(`Computer chose ${comInput}.`);
            comp++;
            user++;
        }
        else if((comInput=='S'&&input=='W')||(comInput=='W'&&input=='G')||(comInput=='G'&&input=='S')){
            alert(`Computer chose ${comInput}.`);
            comp++;
        }
        else {
            alert(`Computer chose ${comInput}.`);
            user++;
        }

        round++;
        alert(`Score => You: ${user}, Computer: ${comp}`);
    }

    if(comp==user)alert("Tie!")
    else if(comp>user)alert("Computer Won!")
    else alert("You won!");

    play = confirm("Do you want to play again?")
}

