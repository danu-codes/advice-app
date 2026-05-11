import { useState } from 'react'
import './App.css'

function App() {
  const [advice, setAdvice]=useState("Please Click button to get advice");

  async function getAdvice(){
    const res=await fetch("https://api.adviceslip.com/advice");
    const data=await res.json();
    setAdvice(data.slip.advice);
  }

  return (

    <div>
      <h3>{advice}</h3>
      <button onClick={getAdvice}>Get Advice</button>
    </div>

  )
}

export default App
