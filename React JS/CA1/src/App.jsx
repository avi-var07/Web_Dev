import React from 'react'
class ABC extends React.Component{
  handleClick=()=>{
    console.log(6);
  }
  render(){
    return (
    <button onClick={this.handleClick}>CLick Me</button>
    );
  }
}
export default ABC;