import {useEffect, useRef, useState} from 'react'
const App=()=>{
  const ref = useRef();
  const a = useRef(0);
  const [count, stateCount] = useState(0);

  useEffect(()=>{
    ref.current.style.backgroundColor ="red"
  },[count])

  function handleDoubleClick(){
    a.current = a.current+1;
    console.log(a.current);
  }
  return(
    <>
    <button ref ={ref} onClick={()=>stateCount(count+1)}>count is {count}</button>
    <button onClick={handleDoubleClick}>Click Me Double</button>
    </>
  )
}
export default App;
