import React, { useEffect, useState } from "react";
import axios from 'axios';
import DayPicker from "./DayPicker";
import Forecast from "./Forecast";
import { Weather, City } from './types';
import './App.css';

const CITIES = [
  {
    name: 'Montreal',
    countryCode: 'CA'
  },
  {
    name: 'Moscow',
    countryCode: 'RU'
  },
  {
    name: 'Tokyo',
    countryCode: 'JP'
  }
];

function App() {
  const [city, setCity] = useState<City>(CITIES[0]);
  const [weather, setWeather] = useState<Weather[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const { data : [ cityData ] } = await axios.get(process.env.REACT_APP_LOCATION_URL || '', { params: { q: `${city.name},${city.countryCode}`, limit: 1, appid: process.env.REACT_APP_API_TOKEN } });

      const { lat, lon } = cityData;
      const { data : { daily } } = await axios.get(process.env.REACT_APP_WEATHER_URL || '', { params: { lat, lon, exclude: 'current,hourly,minutely,alerts', units: 'metric', appid: process.env.REACT_APP_API_TOKEN } });

      setWeather(daily.slice(0, 5).map((data: any) => ({
        date: new Date(data.dt * 1000),
        temperature: data.temp.day,
        condition: data.weather[0].main,
        icon: data.weather[0].icon
      })));
    }
    fetchData();
  }, [city]);

  return (
    <div className="App">
      <DayPicker city={city} cities={CITIES} setCity={setCity}/>
      <Forecast weather={weather}/>
    </div>
  );
}

export default App;
