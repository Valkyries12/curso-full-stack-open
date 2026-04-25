const Filter = ({ value, onChange }) => {
    return (
    <div>
        <label>Filter shown with: </label>
        <input 
          type="text" 
          value={value} 
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    )
}

export default Filter;