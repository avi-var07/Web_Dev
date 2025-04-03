//mao holds key-value pairs and maintains order and always have unique keys
const map  = new Map();
map.set('IN',"India");
map.set('USA',"United States Of America");
map.set('Fr',"France");
map.set("Ab","India");

console.log(map); /*Map(4) {
    'IN' => 'India',
    'USA' => 'United States Of America',
    'Fr' => 'France',
    'Ab' => 'India'
  }*/


for(const key of map) console.log(key); /*[ 'IN', 'India' ]
    [ 'USA', 'United States Of America' ]
    [ 'Fr', 'France' ]
    [ 'Ab', 'India' ]*/

//Another tarika:

for(const [key,value] of map) console.log(key, ":-",value); /*IN :- India
USA :- United States Of America
Fr :- France
Ab :- India*/

//maps are iterable but not objects, though map is an object. for-in loop is used for iteration over objects


const car ={
    car1:"Mercedes",
    car2:"BMW",
    car3:"Lamborghini",
};

for(const key in car) console.log(car[key]);   //matlab ye value print kreaga
 /*Mercedes
BMW
Lamborghini*/
for(const key in car) console.log(key);//matlab ye key print krega
/*car1
car2
car3*/
//ab dekho agar for in loop array pe lagayenge to kya hoga:


const programming = ["java","html","css","javascript"];
for(const i in programming) console.log(i);     //ye indexes(array ki keys) print krdega yaani:
/*0
1
2
3*/
for(const i in programming) console.log(programming[i]); //ye values print krdega array ki:

/*java
html
css
javascript
*/


//for in  loop does not work on map
//forEach: 

//callback function mei naam nhi hota


programming.forEach(function(val){
    console.log(val);   //ye array k saare elements print krdega
});

//using arrow fucntion, but remember callback doesn't have name

programming.forEach((val)=>{
    console.log(val);
});

function printMe(val){
    console.log(val);
}

programming.forEach(printMe);   //yaha printMe() aise nhi likhenge, call nhi krna hai

//79 se 83 code bhi array k values print krega


//ab jo forEach hai ye sirf val ko hi as a parameter nhi leta balki index aur poora array bhi as a parameter leta hai

programming.forEach((val, i, arr)=>{
    console.log(val,i,arr);
})

//output:
/*java 0 [ 'java', 'html', 'css', 'javascript' ] 
html 1 [ 'java', 'html', 'css', 'javascript' ] 
css 2 [ 'java', 'html', 'css', 'javascript' ]  
javascript 3 [ 'java', 'html', 'css', 'javascript' ]*/



//array of objects:


const myArray = [
    {
        name:"aviral",
        roll: "05"
    },
    {
        name:"ved",
        roll: "06"
    },
    {
        name:"prakash",
        roll: "07"
    },
    {
        name:"varshney",
        roll: "08"
    },
]

myArray.forEach((item)=>{
    console.log(item.name);         // ye output pe array mei rakha object pe name key mei stored values print krk dega:
    /*aviral
    ved
    prakash
    varshney*/
})