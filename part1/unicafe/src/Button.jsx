const Button = ({ label, handleFeedback }) => {
    return (
        <button onClick={handleFeedback}>{label}</button>
    )
}

export default Button;