const Persons = ({ filteredPersons, handleDelete }) => {
    return (
        <table>
            <thead></thead>
            <tbody>
                {
                    filteredPersons.map((person) => ( 
                        <tr key={person.id}>
                            <td>{person.name}:</td> 
                            <td>{person.number}</td>
                            <td>
                                <button onClick={() => handleDelete(person.id)}>Eliminar</button>
                            </td>
                        </tr>    
                    ))
                }
            </tbody>
        </table>
    )   
}

export default Persons;