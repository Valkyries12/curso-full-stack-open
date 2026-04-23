import { useState } from 'react'
import Statistics from './Statistics';
import Button from './Button';

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

      <Button 
        label="good" 
        handleFeedback={handleGoodFeedback}
      />
      <Button 
        label="neutral" 
        handleFeedback={handleNeutralFeedback}
      />
      <Button 
        label="bad" 
        handleFeedback={handleBadFeedback}
      />
      

      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        quantity={quantity}
        total={total}
      />
      
    </div>
  )
}

export default App