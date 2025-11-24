import React from 'react'

function App() {
  const a = [1,2,3];
  const b = [4,5];
  const c = [...a, ...b];  // new modern way
  console.log(c); // [1,2,3,4,5]

  const obj1 = {name:"Aviral", age:21};
  const obj2 = {...obj1, city:"Delhi"};

  console.log(obj2);
// {name:"Aviral", age:21, city:"Delhi"}
  return (
    <div>
      {c}
      using object spreading {obj2}
    </div>
  )
}

export default App
