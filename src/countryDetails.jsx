import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import CapitalWeather from "./capitalWeather";

const CountryDetails = (props) => {
  const [capitalWeather, setCapitalWeather] = useState();
  const { countrySearchResults = [] } = props;
  const handleCapitalWeather = async (e, capital) => {
    let url = "http://api.weatherstack.com/current?access_key=9f92a5cd675d9a641830e77f53f057ff&query=" + capital;
    const response = await Axios.get(url);
    if (response.data && response.data.current) {
      response.data.current.capital = capital;
      setCapitalWeather(response.data.current);
    } else {
      setCapitalWeather({});
    }
  };

  return (
    <div>
      {countrySearchResults.length
        ? countrySearchResults.map((country, index) => {
            return (
              <div key={"country-" + index}>
                <div className="display-flex">
                  <div>Capital</div>
                  <div>{country.capital}</div>
                </div>
                <div className="display-flex">
                  <div>Population</div>
                  <div>{country.population}</div>
                </div>
                <div className="display-flex">
                  <div>Latitude and Longitude</div>
                  <div>
                    {country.latlng[0]} &#8500; N, {country.latlng[1]} &#8500; E"
                  </div>
                </div>
                <div className="display-flex">
                  <div>Flag</div>
                  <div>
                    <img width="100px" src={country.flag} alt="flag"></img>
                  </div>
                </div>
                <div>
                  <button type="submit" onClick={(e) => handleCapitalWeather(e, country.capital)}>
                    Capital Weather
                  </button>
                </div>
              </div>
            );
          })
        : null}
      <CapitalWeather capitalWeather={capitalWeather}></CapitalWeather>
    </div>
  );
};

export default CountryDetails;
