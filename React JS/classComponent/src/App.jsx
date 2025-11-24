import React from 'react'

class App extends React.Component{
  render(){
    console.log("Fufa kaise hai?");
    return <h1>Hii Aviral This Side</h1>
  }
}
class ABC{
  constructor(name){
    this.name = name;
  }
  start(){
    console.log(`Kya haal Chal ${this.name}`);
  }
}
const obj = new ABC("Aviral");
obj.start();

export default App
