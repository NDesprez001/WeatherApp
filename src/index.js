import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { WeatherCard } from "./weathercard";

function App() {
  const [weather, setWeather] = React.useState(null);
  // React.useEffect(() => {
  //   fetch(
  //     "https://api.worldweatheronline.com/premium/v1/weather.ashx?key=a6fb6ed448c04624995135629191609&q=Miami&format=json&num_of_days=5"
  //   )
  //     .then(response => response.json())
  //     .then(data => setWeather(data))
  //     .catch(error => {
  //       setWeather({ error });
  //     });
  // }, []);

  return (
    <div className="AppWeather">
      <div className="Card">
        <div className="container">
          <WeatherCard tempature={86} condition={"Sunny"} />
          {weather && (
            <WeatherCard
              temperature={weather.data.current_condition[0].temp_F}
              condition={weather.data.current_condition[0].weatherDesc[0].value}
            />
          )}
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);