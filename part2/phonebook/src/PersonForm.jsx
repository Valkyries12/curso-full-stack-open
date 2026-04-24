const PersonForm = ({ 
    onSubmit,
    onChangeName,
    newName,
    onChangeNumber,
    newNumber 
}) => {
    return (
        <form   
            onSubmit={onSubmit}
        >
        
            <div>
            name: <input 
                    value={newName}
                    onChange={(e) => onChangeName(e.target.value)}
                    />
            <br />
            number: <input 
                    value={newNumber}
                    onChange={(e) => onChangeNumber(e.target.value)}
                    />
            </div>
            <div>
            <button 
                type="submit"
            >
                add
            </button>
            </div>
        </form>
    )
}

export default PersonForm;