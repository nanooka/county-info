import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  // search countries
  const [inputCountry, setInputCountry] = useState("");
  const [countryList, setCountryList] = useState<
    Array<{
      name: string;
      capital: string;
      population: number;
    }>
  >([]);

  // fetching API
  useEffect(
    function () {
      async function fetchCountries() {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${inputCountry}`
        );
        const data = await res.json();
        console.log(data);

        //get country info
        const countryData = data.map(
          (item: {
            name: { common: string };
            capital: string;
            population: number;
          }) => ({
            name: item.name.common,
            capital: item.capital,
            population: item.population,
          })
        );
        setCountryList(countryData);
      }

      if (inputCountry.length < 2) return;

      fetchCountries();
    },
    [inputCountry]
  );
  console.log(countryList);

  //////////

  const navigate = useNavigate();

  function handleNavigation(
    country: string,
    capital: string,
    population: number
  ) {
    navigate("/:country", {
      state: {
        country: { country },
        capital: { capital },
        population: { population },
      },
    });
  }

  return (
    <>
      <input
        type="text"
        value={inputCountry}
        onChange={(e) => setInputCountry(e.target.value)}
      />
      <ul>
        {countryList?.map((country, index) => (
          // <Country
          //   key={index}
          //   name={country.name}
          //   capital={country.capital}
          //   population={country.population}
          // />
          <li key={index}>
            <button
              onClick={() =>
                handleNavigation(
                  country.name,
                  country.capital,
                  country.population
                )
              }
            >
              {country.name}
            </button>
            {/* <Link to="/details/:country">{country.name}</Link> */}
            {/* <Link to="/:country">{country.name}</Link> */}
          </li>
        ))}
      </ul>
    </>
  );
}
