const Statistics = ({
    good,
    neutral,
    bad,
    quantity,
    total
}) => {
    
    return (
        <>
        {
            quantity == 0 
            ? <p>No feedback given</p>
            : (
            <>
                <h2>Statistics</h2>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>All: {quantity}</p>
                <p>Average: {total / quantity}</p>
                <p>Positive: {(good / quantity) * 100}%</p>
            </>
            )
        }
        </>
        
        
    )
}

export default Statistics;