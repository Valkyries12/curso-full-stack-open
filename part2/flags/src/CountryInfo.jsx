const CountryInfo = ({ country }) => {
    const languages = Object.entries(country.languages);

    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>Capital {country.capital[0]}</p>
            <p>Area: {country.area}</p>

            <h3>Languages</h3>
            <ul>
                {languages.map(([key, value]) => <li key={key}>{value}</li>)}
            </ul>
            <picture>
                <img src={country.flags.png} alt={country.flags.alt} />
            </picture>
        </div>
    )
}

export default CountryInfo;