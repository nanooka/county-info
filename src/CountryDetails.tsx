// import { useParams } from "react-router-dom";

import { useLocation } from "react-router-dom";

export default function CountryDetails() {
  //   const params = useParams();
  //   console.log(params.country);
  const location = useLocation();
  console.log(location);

  return (
    <>
      <div>CountryDetails</div>
      <h2>Country: {location.state.country.country}</h2>
      <h2>Capital: {location.state.capital.capital[0]}</h2>
      <h2>Population: {location.state.population.population}</h2>
    </>
  );
}
