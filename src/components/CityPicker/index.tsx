import React from "react";
import { v4 as uuidv4 } from "uuid";
import { City } from "../../types";
import "./style.scss";

function CityPicker(props: { city: City, cities: City[], setCity: (c: City) => void }) {
  const { city, cities, setCity } = props;

  return (
    <div className="CityPicker">
      {cities.map((c: City) => (
        <div
          className={`Day ${city.id === c.id && 'active'}`}
          key={uuidv4()}
          onClick={() => setCity(c)}
        >
          {c.name}
        </div>
      ))}
    </div>
  );
}

export default CityPicker;
