function Card(props){
    console.log(props);     //props ki jagah kuch bhi rkhlo bc, ye hai object!
    console.log(props.age)  //age aayegi
    console.log(props.arr[1])   //arr[1] aayega
    return(
      <div className="card">
      <h1>{props.user} age is {props.age}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>Visit Profile</button>
    </div>
    )
}
export default Card