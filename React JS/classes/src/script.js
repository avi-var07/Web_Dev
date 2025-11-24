class ABC{
  constructor(name, mode){
    this.name=name;
    this.mode=mode;
  }
  start(){
    console.log(`${this.mode} is starting by ${this.name}`);
  }
}
const obj = new ABC("Aviral", "Study");
obj.start();


//React mei class component hota hai sirf classes nhi!