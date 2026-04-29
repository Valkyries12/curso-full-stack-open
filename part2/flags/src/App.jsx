import { useState } from 'react'


function App() {
  const [countries, setCountries] = useState([]);
  const [searchbox, setSearchbox] = useState("");


  const handleSearch = (e) => {
    setSearchbox(e.target.value);
  }

  return (
    <>
      <form>
        <label htmlFor="search">Find countries</label>
        <input 
          type="search" 
          id="search"
          onChange={handleSearch}
          value={searchbox} 
        />
      </form>
    </>
  )
}

export default App
