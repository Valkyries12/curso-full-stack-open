import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { id: `Arto Hellas ${Math.random()}`, name: 'Arto Hellas', number: "040-1234567" }
  ]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const nameFound = persons.find((person) => person.name.toLowerCase() === newName.toLowerCase());
    if (nameFound) return alert(`${nameFound.name} is already added to phonebook`);

    const newPerson = {
      id: `${newName} ${Math.random()}`,
      name: newName,
      number: newNumber
    };
    setPersons([...persons, newPerson]);
    setNewName("");
    setNewNumber("");
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
          <br />
          number: <input 
                  value={newNumber}
                  onChange={(e) => setNewNumber(e.target.value)}
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
        persons.map((person) => <p key={person.id}>{person.name}: {person.number}</p>)
      }
    </div>
  )
}

export default App