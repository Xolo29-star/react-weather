import "./styles.css";
import WeatherSearch from "./WeatherSearch";

export default function App() {
  return (
    <div className="App">
      <h1>Weather AJAX Search Engine</h1>
      <WeatherSearch />
      <br />
      <p>
        This project was coded by{" "}
        <a href="https://github.com/lucynowland">Lucy Nowland</a> which is
        open-sourced on{" "}
        <a href="https://github.com/lucynowland/react-weather">GitHub</a> and
        hosted on <a href="https://react-weather-hw.netlify.app/">Netlify</a>
      </p>
    </div>
  );
}
