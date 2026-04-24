const Total = ({parts}) => {
    const exerciseQuantity = parts.reduce((sum, part) => sum + part.exercises, 0);
    
    return (
        <p><b>Total of exercises {exerciseQuantity}</b></p>
    )
}

export default Total;