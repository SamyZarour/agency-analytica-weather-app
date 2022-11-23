import React from "react";
import { Weather } from "../../types";
import "./style.scss";

function Forecast(props: { weather: Weather[] }) {
  return (
    <div className="Forecast">
      Forecast
    </div>
  );
}

export default Forecast;
