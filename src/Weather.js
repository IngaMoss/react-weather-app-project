import React, { useState } from "react";
import axios from "axios";
import './Weather.css';

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        console.log(response.data)
        setWeatherData({
            ready: true,
            city: response.data.name,
            date: "",
            iconUrl: "",
            temperature: response.data.main.temp,
            description: response.data.weather[0].main,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity

        });
    }
    if (weatherData.ready) {
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
                        <h1>{weatherData.city}</h1>
                        <ul>
                            <li>{weatherData.date}</li>
                            <li className="text-capitalize">{weatherData.description}</li>
                            <li>Humidity: {weatherData.humidity}%</li>
                            <li>Wind: {weatherData.wind} km/h</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <img src={weatherData.iconUrl} alt={weatherData.description} /><span className="Temperature">{Math.round(weatherData.temperature)}</span><span className="Unit">°C</span></div>
                    <div className="col-4">
                        <button type="Submit" className="Location">Location</button>
                    </div>
                </div>
            </div>
        );
    } else {
        const apiKey = "6a4eedc94ba63bc335cf63285a0c725f";
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
}