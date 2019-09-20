import React from "react";
import "./weathercard.css"

export function WeatherCard(props) {
  return (
    <div className="WeatherCard">
      <div className="mainComponents">
        <div className="components">
          <div className="comp1">
            <div className="weather">{props.condition}</div>
            <img src="https://www.jamberoo.net/addons/shared_addons/themes/jamberoo2015/img/weather/icons/3.png" alt="" />
          </div>
          <div className="comp2">
            <div className="cityimage">Miami</div>
          </div>
        </div>
          <div className="citydata">
            Miami, Fl
            <br />
            86
            <br />
            Monday | {new Date().toISOString()}
          </div>
          <div className="temperature">{props.temperature}</div>
      </div>
    </div>
  );
}