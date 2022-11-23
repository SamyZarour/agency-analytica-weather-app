import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Weather } from "../../types";
import "./style.scss";

function Forecast(props: { weather: Weather[] }) {
  const { weather } = props;
  const [ today, ...futureWeather ] = weather;

  const getIconUrl = (code: String) => `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${code}.svg`

  return (
    <div className="Forecast">
      <div className="today">
        <div className="date">Today</div>
        <div className="information">
          <div className="icon">
            <img src={getIconUrl(today.icon)} alt="weather-condition"/>
          </div>
          <div className="condition">
            <div className="temperature">{`${today.temperature}°`}</div>
            <div className="category">{today.condition}</div>
          </div>
        </div>
      </div>
      <div className="future">
        {futureWeather.map(w => (
          <div key={uuidv4()} className="future-day">
            <div className="date">{w.date.toString()}</div>
            <div className="icon">
              <img src={getIconUrl(w.icon)} alt="weather-condition"/>
            </div>
            <div className="temperature">{`${w.temperature}°`}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
