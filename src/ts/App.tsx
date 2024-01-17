import { Routes, Route } from "react-router-dom";
// import "./App.css";
import HomePage from "./HomePage";
import CountryDetails from "./CountryDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:country" element={<CountryDetails />} />
      </Routes>
    </>
  );
}

export default App;
