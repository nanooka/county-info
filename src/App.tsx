// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import { Details } from "./Details";
// import Details from "./Details";
import HomePage from "./HomePage";
import CountryDetails from "./CountryDetails";
// import { Details } from "./Details";

function App() {
  return (
    <>
      <div>hello</div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/details" element={<Details />} /> */}
        {/* <Route path="/details/:country" element={<CountryDetails />} /> */}
        <Route path="/:country" element={<CountryDetails />} />
      </Routes>
    </>
  );

  // const [inputCountry, setInputCountry] = useState("");
  // const [countryList, setCountryList] = useState<
  //   Array<{
  //     name: string;
  //     capital: string;
  //     population: number;
  //   }>
  // >([]);

  // useEffect(
  //   function () {
  //     async function fetchCountries() {
  //       const res = await fetch(
  //         `https://restcountries.com/v3.1/name/${inputCountry}`
  //       );
  //       const data = await res.json();
  //       console.log(data);

  //       const countryData = data.map(
  //         (item: {
  //           name: { common: string };
  //           capital: string;
  //           population: number;
  //         }) => ({
  //           name: item.name.common,
  //           capital: item.capital,
  //           population: item.population,
  //         })
  //       );
  //       setCountryList(countryData);
  //     }

  //     if (inputCountry.length < 2) return;

  //     fetchCountries();
  //   },
  //   [inputCountry]
  // );
  // console.log(countryList);

  // return (
  //   <>
  //     <input
  //       type="text"
  //       value={inputCountry}
  //       onChange={(e) => setInputCountry(e.target.value)}
  //     />
  //     <ul>
  //       {countryList?.map((country, index) => (
  //         // <Country
  //         //   key={index}
  //         //   name={country.name}
  //         //   capital={country.capital}
  //         //   population={country.population}
  //         // />
  //         <li key={index}>
  //           <Link to="/details">{country.name}</Link>
  //         </li>
  //       ))}
  //     </ul>
  //     <Routes>
  //       <Route path="/" element={<MainPage />} />
  //       <Route path="/details" element={<Details />} />
  //     </Routes>
  //   </>
  // );
}

// function Country({
//   name,
//   capital,
//   population,
// }: {
//   name: string;
//   capital: string;
//   population: number;
// }) {
//   return (
//     <>
//       <li>
//         {/* <Link to={`/details/${name}`}>{name}</Link> */}
//         <Link to="/details">details</Link>
//         {/* <button onClick={CountryDetails()}>{name}</button> */}
//         {/* <p>Capital: {capital}</p>
//       <p>Population: {population}</p> */}
//       </li>
//       <Routes>
//         <Route />
//       </Routes>
//     </>
//   );
// }

export default App;
