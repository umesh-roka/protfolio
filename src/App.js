import React, { useEffect, useState } from 'react'

const App = () => {
  const [count, setCount]=useState(0);
  const[name,setName]= useState(false)
  useEffect(()=>{
if(count === 3){
  setName(true)
}
  },[count])
  return (
    <div>
      <h1>{count}</h1>
      {name? <p>Hello </p>:null }
      <button onClick={()=>setCount(count+1)}>increment</button>
    </div>
  )
}

export default App
