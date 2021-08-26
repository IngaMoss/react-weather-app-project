import React, { useState, useEffect } from "react";
import axios from "axios";
import './WeatherForecast.css';
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherWeeklyForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coord]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }
    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function (dailyForecast, index) {
                        if (index < 6) {
                            return (
                                <div className="col" key={index}>
                                    <WeatherForecastDay data={dailyForecast} />
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div >
        )
    } else {
        const apiKey = "6a4eedc94ba63bc335cf63285a0c725f";
        let latitude = props.coord.lat;
        let longitude = props.coord.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);

        return null;
    };
}