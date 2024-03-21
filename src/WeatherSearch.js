import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [cityName, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleWeatherData(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function displayForecast(event) {
    event.preventDefault();
    let apiKey = `a710bd8bd76400c9658ef649d9e81728`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleWeatherData);
  }

  let form = (
    <form className="SearchEngine" onSubmit={displayForecast}>
      <input
        type="search"
        placeholder="Enter a City..."
        onChange={updateCity}
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
