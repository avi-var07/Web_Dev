import Card from './card.jsx'

const App = () => {
  
  const age = 20;
  return (

    <>
    <div className='card'>
      <Card/>
      <p>and I am {age} years old</p>
    </div>
    </>
  )
}

export default App
