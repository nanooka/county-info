import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  // search countries
  const [inputCountry, setInputCountry] = useState("");
  const [countryList, setCountryList] = useState<
    Array<{
      name: string;
      capital: string;
      languages: object;
      population: number;
      area: number;
      continent: string;
      region: string;
      flag: { alt: string; png: string; svg: string };
      coatOfArms: { png: string; svg: string };
      map: string;
      altSpellings: Array<string>;
      currencies: object;
      timezones: Array<string>;
      car: { signs: Array<string>; side: string };
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
            languages: object;
            population: number;
            area: number;
            continents: string;
            region: string;
            flags: { alt: string; png: string; svg: string };
            coatOfArms: { png: string; svg: string };
            maps: { googleMaps: string };
            altSpellings: Array<string>;
            currencies: object;
            timezones: Array<string>;
            car: { signs: Array<string>; side: string };
          }) => ({
            name: item.name.common,
            capital: item.capital,
            languages: item.languages,
            population: item.population,
            area: item.area,
            continent: item.continents,
            region: item.region,
            flag: item.flags,
            coatOfArms: item.coatOfArms,
            map: item.maps.googleMaps,
            altSpellings: item.altSpellings,
            currencies: item.currencies,
            timezones: item.timezones,
            car: item.car,
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

  return (
    <>
      <h1>Get information about countries</h1>
      <input
        placeholder="Input country..."
        type="text"
        value={inputCountry}
        onChange={(e) => setInputCountry(e.target.value)}
      />
      <ul>
        {countryList?.map((country) => (
          <li key={country.name}>
            <Link to={`/${country.name}`} state={country}>
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
