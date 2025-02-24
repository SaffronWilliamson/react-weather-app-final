import React from 'react';
import './Weather.css';

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Manchester</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Scattered showers</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png"
              alt="Scattered showers"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">6</span>
              <span className="unit">ºC</span>
            </div>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>Precipitation: 55%</li>
            <li>Humidity: 80%</li>
            <li>Wind: 12 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
