import React from "react";
import { Weather } from "../../types";
import "./style.scss";

function Forecast(props: { weather: Weather[] }) {
  const { weather } = props;

  return (
    <div className="Forecast">
      <div className="today">
        <div className="date">Today</div>
        <div className="information">
          <div className="icon">Clouds</div>
          <div className="condition">
            <div className="temperature">19°</div>
            <div className="category">Clouds</div>
          </div>
        </div>
      </div>
      <div className="future">
        {weather.map(w => (
          <div className="future-day">
            <div className="date">Today</div>
            <div className="icon">Clouds</div>
            <div className="temperature">19°</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
