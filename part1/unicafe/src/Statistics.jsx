import StatisticLine from "./StatisticLine";

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
                <table>
                    <tbody>
                        <StatisticLine text="Good" value={good}/>
                        <StatisticLine text="Neutral" value={neutral}/>
                        <StatisticLine text="Bad" value={bad}/>
                        <StatisticLine text="All" value={quantity}/>
                        <StatisticLine text="Average" value={total / quantity}/>
                        <StatisticLine text="Positive" value={`${(good / quantity) * 100}%`}/> 
                    </tbody>
                    
                </table>

            </>
            )
        }
        </>
        
        
    )
}

export default Statistics;