const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function (button){  //forEach method is used to iterate over the buttons array and apply the function to each button
    // console.log(button);  // ye button ki id ko print karega
    button.addEventListener('click', function(e){   //e event object hai
        if(e.target.id==='grey')body.style.backgroundColor = e.target.id;
        //e.target.id ye button ki id ko print karega jo click hua hai
        if(e.target.id==='white')body.style.backgroundColor = e.target.id;
        if(e.target.id==='blue')body.style.backgroundColor = e.target.id;
        if(e.target.id==='yellow')body.style.backgroundColor = e.target.id;
    })
})
