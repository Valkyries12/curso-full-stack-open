import { useEffect, useState } from 'react'
import countryService from './countryService';
import CountryInfo from './CountryInfo';


function App() {
  const [countries, setCountries] = useState([]);
  const [searchbox, setSearchbox] = useState("");


  useEffect(() => {
    countryService
      .getAll()
      .then((countries) => {
        setCountries(countries);
        console.log(countries)
      })
      .catch((error) => {
        console.error(error);
      })
  }, []);


  const handleSearch = (value) => {
    setSearchbox(value);
    console.log("buscando palabras con ", value);
    
    console.log(filteredCountries);
  }

  const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchbox));
  const qtyCountries = filteredCountries.length;

  return (
    <>
      <form>
        <label htmlFor="search">Find countries</label>
        <input 
          type="text" 
          id="search"
          onChange={(e) => handleSearch(e.target.value)}
          value={searchbox} 
        />
      </form>

      {
        qtyCountries > 10 && searchbox != ""
          ? <p>Too many matches, specify another filter</p>
          : filteredCountries.map((country) => {
            if (searchbox.length > 0 && qtyCountries != 1) {
              return <p key={country.name.common}>{country.name.common}</p>
            }
          })
      }

      {
        qtyCountries == 1 && (
          <CountryInfo country={filteredCountries[0]}/>
        )
      }
    </>
  )
}

export default App
