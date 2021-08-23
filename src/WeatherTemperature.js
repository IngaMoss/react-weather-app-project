import React, { useState } from "react";
import './Weather.css';

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("metrics");
    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    };
    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    if (unit === "celsius") {
        return (
            <div className="WeatherTemperature">
                <span className="Temperature">{Math.round(props.celsius)}</span>
                <span className="Unit">
                    °C |{" "}
                    <a href="/" onClick={convertToFahrenheit}>°F</a></span>
            </div>
        );
    } else {
        let fahrenheit = (props.celsius * 9 / 5) + 32;
        return (
            <div className="WeatherTemperature">
                <span className="Temperature">{Math.round(fahrenheit)}</span>
                <span className="Unit">
                    <a href="/" onClick={convertToCelsius}>°C</a>
                    {" "}|°F </span>
            </div>
        );
    }
}