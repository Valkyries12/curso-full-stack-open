import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);


  const handleGoodFeedback = () => {
    setQuantity(quantity +1);
    setTotal(t => t +1);
    setGood(g => g +1);
  }

  const handleNeutralFeedback = () => {
    setQuantity(quantity +1);
    setTotal(t => t +0);
    setNeutral(n => n +1);
  }

  const handleBadFeedback = () => {
    setQuantity(quantity +1);
    setTotal(t => t -1);
    setBad(b => b +1);
  }

  return (
    <div>
      <h1>Give Feedback</h1>

      <button onClick={handleGoodFeedback}>good</button>
      <button onClick={handleNeutralFeedback}>neutral</button>
      <button onClick={handleBadFeedback}>bad</button>

      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {quantity}</p>
      <p>Average: {total / quantity}</p>
      <p>Positive: {(good / quantity) * 100}%</p>
    </div>
  )
}

export default App