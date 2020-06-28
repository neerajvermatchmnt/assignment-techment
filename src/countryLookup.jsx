import React, { useState } from "react";
import axios from "axios";
import CountryDetails from "./countryDetails";

const CountryLookup = (props) => {
  const [country, setCountry] = useState("");
  const [countrySearchResults, setCountrySearchResults] = useState([]);

  const handleCountryChange = (e) => {
    let value = e.target.value;
    setCountry(value);
  };

  const handleCountrySubmit = async () => {
    let url = "https://restcountries.eu/rest/v2/name/" + country;
    const response = await axios.get(url);
    if (response.data && response.data.length) {
      setCountrySearchResults(response.data);
    } else {
      setCountrySearchResults([]);
    }
  };

  return (
    <div>
      <div className="display-flex">
        <div>
          <input placeholder="Enter Country" onChange={(e) => handleCountryChange(e)} name="country"></input>
        </div>
        <div>
          <button type="submit" onClick={() => handleCountrySubmit()}>
            Submit
          </button>
        </div>
      </div>

      <CountryDetails countrySearchResults={countrySearchResults}></CountryDetails>
    </div>
  );
};

export default CountryLookup;
