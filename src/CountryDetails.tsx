import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

interface Currency {
  name: string;
  symbol: string;
}

export default function CountryDetails() {
  const location = useLocation();
  console.log(location);

  const currencyObject = location.state?.currencies as
    | Record<string, Currency>
    | undefined;

  const currency = currencyObject
    ? Object.values(currencyObject)[0]
    : undefined;

  const currencyKey = Object.keys(location.state?.currencies);

  return (
    <>
      <h2>{location.state?.name}</h2>
      <p>AltSpellings: {location.state?.altSpellings.toString()}</p>
      <p>Capital: {location.state?.capital[0]}</p>
      <p>
        Official Languages:{" "}
        {Object.values(location.state?.languages).toString()}
      </p>
      <p>Population: {location.state?.population}</p>
      <p>Area: {location.state?.area} km²</p>
      <p>Continent: {location.state?.continent}</p>
      <p>Region: {location.state?.region}</p>
      <img src={location.state?.flag.png} alt={location.state?.flag.alt} />
      <img src={location.state?.coatOfArms.png} />
      <Link to={location.state?.map} target="_blank">
        Map
      </Link>
      <p>
        Currencies: {currencyKey} - {currency?.name}, {currency?.symbol}
      </p>
      <p>Time Zone: {location.state?.timezones[0]}</p>
      <p>Driving Side: {location.state?.car.side}</p>
    </>
  );
}
