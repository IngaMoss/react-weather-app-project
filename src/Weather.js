import React from "react";
import './Weather.css';

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city.." className="form-control" autoFocus="on" />
                    </div>
                    <div className="col-3">
                        <input type="Submit" value="Search" className="btn w-100" />
                    </div>
                </div>
            </form >

            <div className="row">
                <div className="col-4">
                    <h1>Lisbon</h1>
                    <ul>
                        <li>Tuesday 13:20</li>
                        <li>Clear sky</li>
                        <li>Humidity: 57%</li>
                        <li>Wind: 2 km/h</li>
                    </ul>
                </div>
                <div className="col-4">
                    <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="=)" /><span className="Temperature">6</span><span className="Unit">°C</span></div>
                <div className="col-4">
                    <button type="Submit" className="Location">Location</button>
                </div>
            </div>
        </div>
    )
};