import React from 'react'

function App() {
  const arr = [10,20,30];
  const [a, b, c] = arr;
  
  console.log(a, b, c); // 10 20 30
  //object destructuring:
  const person = { name:"Aviral", age:21 };

  const { name, age } = person;

  console.log(name, age);
  return (
    <div>
      The values after destructuring is: {a}, {b}, {c}
      The values after object destructuring is: {name}, {age}

    </div>
  )
}

export default App
