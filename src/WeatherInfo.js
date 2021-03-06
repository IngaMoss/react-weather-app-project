import React from "react";
import './Weather.css';

import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="row">
                <div className="col-4">
                    <h1>{props.data.city}</h1>
                    <ul>
                        <li><FormattedDate date={props.data.date} /></li>
                        <li className="text-capitalize">{props.data.description}</li>
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {props.data.wind} km/h</li>
                    </ul>
                </div>
                <div className="col-4">
                    <img src={props.data.iconUrl} alt={props.data.description} />
                    <WeatherTemperature celsius={props.data.temperature} />
                </div>
            </div>
        </div>
    )
}