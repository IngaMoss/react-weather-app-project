import React, { useState } from "react";
import './Weather.css';

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("metric");

    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    };

    if (unit === "fahrenheit") {
        let fahrenheit = (props.celsius * 9 / 5) + 32;
        return (
            <div className="WeatherTemperature">
                <span className="Temperature">{Math.round(fahrenheit)}</span>
                <span className="Unit">
                    <a href="/" onClick={convertToCelsius}>°C</a>
                    {" "}|°F </span>
            </div>
        );
    } else {
        return (
            <div className="WeatherTemperature">
                <span className="Temperature">{Math.round(props.celsius)}</span>
                <span className="Unit">
                    °C |{" "}
                    <a href="/" onClick={convertToFahrenheit}>°F</a></span>
            </div>
        );
    }
}