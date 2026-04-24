import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { id: `Arto Hellas ${Math.random()}`, name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    const nameFound = persons.find((person) => person.name.toLowerCase() === newName.toLowerCase());
    if (nameFound) return alert(`${nameFound.name} is already added to phonebook`);

    const newPerson = {
      id: `${newName} ${Math.random()}`,
      name: newName
    };
    setPersons([...persons, newPerson]);
    setNewName("");
  }

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <form   
        onSubmit={handleSubmit}
      >
        <div>
          name: <input 
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
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
      <h2>Numbers</h2>
      {
        persons.map((person) => <p key={person.id}>{person.name}</p>)
      }
    </div>
  )
}

export default App