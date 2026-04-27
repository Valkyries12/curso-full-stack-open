import { useEffect, useState } from 'react';
import axios from "axios";
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';

const App = () => {
  const [persons, setPersons] = useState([]); 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");


  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => {
          const personsResponse = response.data;
          setPersons(personsResponse);
      });
  }, []);


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

  const filteredPersons = persons.filter((person) => person.name.includes(search));



  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        value={search} 
        onChange={setSearch}
      />
      
      <h2>Add a new</h2>
      <PersonForm 
        onSubmit={handleSubmit}
        onChangeName={setNewName}
        newName={newName}
        onChangeNumber={setNewNumber}
        newNumber={newNumber}
      />
      
      <h2>Numbers</h2>
      <Persons 
        filteredPersons={filteredPersons}
      />
      
    </div>
  )
}

export default App