import React from 'react';
import WeatherIcon from './WeatherIcon';
import "./WeatherForecast.css";

export default function WeatherForecats() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div clasName="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19º</span>
            <span className="WeatherForecast-temperature-min">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
