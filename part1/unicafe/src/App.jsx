import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>

      <button onClick={() => setGood(g => g +1)}>good</button>
      <button onClick={() => setNeutral(n => n +1)}>neutral</button>
      <button onClick={() => setBad(b => b +1)}>bad</button>

      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {good + bad + neutral}</p>
    </div>
  )
}

export default App