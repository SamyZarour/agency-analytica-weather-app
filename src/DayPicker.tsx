import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { City } from './types';
import './App.css';

function DayPicker(props: { city: City, cities: City[], setCity: (c: City) => void }) {
  const { cities } = props;

  return (
    <div className="DayPicker">
      {cities.map((c: City) => <span key={uuidv4()}>{c.name}</span>)}
    </div>
  );
}

export default DayPicker;
