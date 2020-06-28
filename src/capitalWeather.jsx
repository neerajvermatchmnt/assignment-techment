import React from "react";
const CapitalWeather = (props) => {
  const { capitalWeather = null } = props;

  return (
    <div
      style={{
        padding: 10,
      }}
    >
      {capitalWeather ? (
        <div>
          <div className="display-flex">
            <div>Capital City</div>
            <div>{capitalWeather.capital}</div>
          </div>
          <div className="display-flex">
            <div>Temperature</div>
            <div>{capitalWeather.temperature}</div>
          </div>
          <div className="display-flex">
            <div>Weather</div>
            <div>
              <img src={capitalWeather.weather_icons && capitalWeather.weather_icons[0]} alt="weather"></img>
            </div>
          </div>
          <div className="display-flex">
            <div>Wind Speed</div>
            <div>{capitalWeather.wind_speed}</div>
          </div>
          <div className="display-flex">
            <div>Precipitation</div>
            <div>{capitalWeather.precip}</div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CapitalWeather;
