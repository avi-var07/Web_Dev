import React, { useState } from 'react'

function App() {
  const[naam, setName] = useState("Aviral");
  function handleClick(){
    alert("Kyu Click kiya bhai? ");
  }
  const handleChange = (e)=>{
    setName(e.target.value);
  }
  return (
    <>
    <button onClick={handleClick}>Click Me</button>

    <input type="text" value={naam} onChange={handleChange}/>
    </>
  )
}

export default App
