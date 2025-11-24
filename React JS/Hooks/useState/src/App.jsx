import {React, useState} from 'react';

const App = ()=>{
  const [count, setCount] = useState(0);

  return(
    <>
    <div> The count is {count}</div>
    <button onClick={()=>{setCount(count+1)}}>Increase Me</button>
    </>
  )
}
export default App;