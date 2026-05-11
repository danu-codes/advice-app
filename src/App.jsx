import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [advice, setAdvice] = useState("Please Click button to get advice");
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  async function getAdvice() {
    setLoading(true);
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
    setLoading(false);
  }

  return (

    <div>
      {loading ? <h3>Please wait, we are preparing your advice...</h3> : <h3>{advice}</h3>}
      <button onClick={getAdvice} disabled={loading}>
        {loading ? "Loading..." : "Get Advice"}
      </button>
      <p>You have read <b>{count}</b> pieces of advice</p>
    </div>

  )
}

export default App
