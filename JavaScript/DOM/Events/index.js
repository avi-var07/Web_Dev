document.getElementById('owl').addEventListener('click', function(e){
    alert("Owl Jaag Gaya!!");   //jab bhi owl pe click krenge to alert box dega
}, false)   //false default hota hai, iska mtlb hai event bubbling(niche se upar) jo event propagation ka part hai. dusra hota hai event capturing jo jaata hai top se bottom

document.getElementById('images').addEventListener('click', function(e){
    alert("Image click hogyi bhai!!");  
}, false)   //ab dekho images saari images ka baap hai, to jb owl pe click kroge to pehle images mei likha alert hoga ya for owl mei likha?? yehi hoti hai event propagation jsimei event bubbling hoti hai default yaani bottom up, yaani owl clicked aayega pehle fir image click hogyi aayega. isi ko change krna ho to event capturing laga denge ayani true krdenge yaa fir e.stopPropagation() laga denge 
//propagation stop krne k liye e.stopPropagation();
 document.getElementById('google').addEventListener('click',function(e){
        e.preventDefault();
        e.stopPropagation()
        console.log("google clicked");
    }, false)
//e.preventDefault() default nature ko disable krne k liye use hota hai

//click images and they are deleted

// sabhi images ko select karo
const images = document.querySelector('#images');

// ul ke andar click event laga do (event delegation technique)
images.addEventListener('click', function (event) {
    // check karo ki click kisi image pe hua hai
    if (event.target.tagName === 'IMG') {
        event.target.parentNode.remove();  // jis image pe click hua usko hata do along with the bullet
    }
});
