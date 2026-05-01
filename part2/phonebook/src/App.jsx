import { useEffect, useState } from 'react';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';
import personService from './services/personService';
import Notification from './Notification';

const App = () => {
  const [persons, setPersons] = useState([]); 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState(null);


  useEffect(() => {
      personService
        .getAll()
        .then((initialPersons) => {
          setPersons(initialPersons);
        })
      
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault();
    const personFound = persons.find((person) => person.name.toLowerCase() === newName.toLowerCase());
    if (personFound) {
      const isChoosedForEdit = window.confirm(`${personFound.name} is already added to phonebook, replace the old number with a new one?`);
      if (isChoosedForEdit) {
        personService
            .update(personFound.id, {...personFound, number: newNumber})
            .then((updatedPerson) => {
              const filteredList = persons.map(person => person.id === updatedPerson.id ? updatedPerson : person);
              setPersons(filteredList);
              setNewName("");
              setNewNumber("");
            })
            .catch((error) => {
              setMessage(`Error: Information of ${personFound.name} has already removed from server`);
              console.error(error);
              setTimeout(() => {
                setMessage(null);
              }, 3000);
              setNewName("");
              setNewNumber("");
            })
        
      }
      return
    }

    const newPerson = {
      name: newName,
      number: newNumber
    };

    personService
      .create(newPerson)
      .then((createdPerson) => {
        setPersons([...persons, createdPerson]);
        setMessage(`Added ${createdPerson.name}`);
        setTimeout(() => {
          setMessage(null);
        }, 3000);
        setNewName("");
        setNewNumber("");
      })
      .catch((error) => {
        setMessage(`Error: ${error}`);
        setTimeout(() => {
          setMessage(null);
        }, 3000);
        setNewName("");
        setNewNumber("");
      })
   
  }

  const handleDelete = (id) => {
    const choosedPerson = persons.filter(person => person.id === id);
    const isConfirmed = window.confirm(`Are you sure you want to delete ${choosedPerson[0].name}`);
    if (!isConfirmed) return

    personService
      .deletePerson(id)
      .then(response => {
        setPersons(persons.filter((person) => person.id !== response.id));
      })
      .catch((error) => {
        setMessage(`Error: ${error}`);
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      })
  }

  const filteredPersons = persons.filter((person) => person.name.includes(search));



  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message}/>
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
        handleDelete={handleDelete}
      />
      
    </div>
  )
}

export default App