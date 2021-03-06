import React, { useState } from "react";
import axios from "axios";
import './Weather.css';

import WeatherInfo from "./WeatherInfo";
import WeatherWeeklyForecast from "./WeatherWeeklyForecast";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            city: response.data.name,
            coord: response.data.coord,
            date: new Date(response.data.dt * 1000),
            iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            temperature: response.data.main.temp,
            description: response.data.weather[0].main,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity
        });
    }

    function search() {
        const apiKey = "6a4eedc94ba63bc335cf63285a0c725f";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }
    function handleCityChange(event) {
        setCity(event.target.value);
    }

    function showCurrentLocation(position) {
        const apiKey = "6a4eedc94ba63bc335cf63285a0c725f";
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleCurrentLocation(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(showCurrentLocation);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Enter a city.." className="form-control" autoFocus="on" onChange={handleCityChange} />
                        </div>
                        <div className="col-3">
                            <input type="Submit" value="Search" className="btn w-100" />
                        </div>
                    </div>
                    <button type="Submit" className="Location" onClick={handleCurrentLocation}>Location</button>
                </form >
                <WeatherInfo data={weatherData} />
                <WeatherWeeklyForecast coord={weatherData.coord} />
            </div>
        );
    } else {
        search();
        return "Loading...";
    }
}