const Total = ({parts}) => {
    const exerciseQuantity = parts.reduce((sum, part) => sum + part.exercises, 0);
    
    return (
        <p>Number of exercises {exerciseQuantity}</p>
    )
}

export default Total;