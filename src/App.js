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
        <a
          href="https://github.com/lucynowland"
          target="_blank"
          rel="noreferrer"
        >
          Noxolo Gama
        </a>{" "}
        which is open-sourced on{" "}
        <a
          href="https://github.com/Xolo29-star/react-weather"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://rainbow-queijadas-8394cb.netlify.app//"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </p>
    </div>
  );
}
