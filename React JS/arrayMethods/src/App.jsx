function App() {
  const a = [1,2,3];
  const b = [4,5,6];
  const c = [2,4,6,8];
  const result = c.every(n=>n%2==0);
  const result2 = c.every(n=>n%3==0);
  const nums = [1,2,3,4,5,6,7,8,9,10];
  const even = nums.filter(n => n % 2 === 0);
  const names = ["Aviral", "Ved", "Varshney"]
  return (
    <>
    <h1>{a.concat(b).join(", ")}</h1>

    <h1>{result.toString()}</h1>
    <h1>{result2.toString()}</h1>
    <h4>{even.map(n=><p>{n}</p>)}</h4>

    <h6>{nums.find(n=>n===7)}</h6>  
    
    {names.map((name, i) => <p key={i}>{name}</p>)}
    
    </>
  )
}

export default App
