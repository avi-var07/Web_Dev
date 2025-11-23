import Card from "./Card"

const App = () => {
  return (
    <>
    <Card user = "Aviral" age = {20} arr = {[10,20,30]}/>
    <Card user = "Ved" age = {55} arr = {[30, 20,10]}/>
    <Card user = "Varshney" age = {200} arr = {[20,10, 30]}/>
  
   
    </>
  )
}

export default App

//In console: 
// {user: 'Aviral', age: 20, arr: Array(3)}

// {user: 'Ved', age: 55, arr: Array(3)}

// {user: 'Varshney', age: 200, arr: Array(3)}

//check output.png for output!