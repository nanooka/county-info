import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
// import Image from "react-bootstrap/Image";
// import Row from "react-bootstrap/Row";
import { Col, Container, Image, Row } from "react-bootstrap";

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
    <Container className="text-center text-lg-start">
      {/* <img src={location.state?.flag.png} alt={location.state?.flag.alt} />
      <img src={location.state?.coatOfArms.png} />
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
      <Link to={location.state?.map} target="_blank">
        Map
      </Link>
      <p>
        Currencies: {currencyKey} - {currency?.name}, {currency?.symbol}
      </p>
      <p>Time Zone: {location.state?.timezones[0]}</p>
      <p>Driving Side: {location.state?.car.side}</p> */}

      <div className="d-flex flex-column flex-lg-row justify-content-around align-items-center mt-5 gap-4">
        <div className="border rounded">
          <Image
            src={location.state?.flag.png}
            alt={location.state?.flag.alt}
            width={400}
            rounded
          />
        </div>
        <Image src={location.state?.coatOfArms.png} width={400} rounded />
      </div>

      {/* <Row>
        <Col>
          <Image
            src={location.state?.flag.png}
            alt={location.state?.flag.alt}
            width={400}
            rounded
          />
        </Col>
        <Col>
          <Image src={location.state?.coatOfArms.png} height={250} />
        </Col>
      </Row> */}

      <h1 className="text-center mt-5v">{location.state?.name}</h1>
      <b>
        <Link to={location.state?.map} target="_blank">
          See Location
        </Link>
      </b>
      <p>
        <b>AltSpellings: </b>
        {location.state?.altSpellings.toString()}
      </p>
      <p>
        <b>Capital: </b>
        {location.state?.capital[0]}
      </p>
      <p>
        <b>Official Languages: </b>
        {Object.values(location.state?.languages).toString()}
      </p>
      <p>
        <b>Population: </b>
        {location.state?.population}
      </p>
      <p>
        <b>Area: </b>
        {location.state?.area} km²
      </p>
      <p>
        <b>Continent: </b>
        {location.state?.continent}
      </p>
      <p>
        <b>Region: </b>
        {location.state?.region}
      </p>

      <p>
        <b>Currencies: </b>
        {currencyKey} - {currency?.name}, {currency?.symbol}
      </p>
      <p>
        <b>Time Zone: </b>
        {location.state?.timezones[0]}
      </p>
      <p>
        <b>Driving Side: </b>
        {location.state?.car.side}
      </p>
    </Container>
  );
}
