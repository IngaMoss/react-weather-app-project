import React from "react";
import './Weather.css';

export default function Weather() {
    return (
        <div className="Weather">

            <form id="search-form" >
                <div className="row">
                    <div className="col-7">
                        <input type="search" placeholder="Enter a city.." className="form-control" />
                    </div>
                    <div className="col-3">
                        <input type="Submit" value="    Search    " className="btb btn-primary" />
                    </div>
                </div>
            </form >

            <div className="row">
                <div className="col-3">
                    <h1>Lisbon</h1>
                    <ul>
                        <li>Tuesday 13:20</li>
                        <li>Clear sky</li>
                        <li>Humidity: 57%</li>
                        <li>Wind: 2 km/h</li>
                    </ul>
                </div>
                <div className="col-4">
                    <img src="" alt="=)" /> 6°C
                </div>
                <div className="col-4">
                    <input type="Submit" value="My location" className="btb btn-primary" />
                </div>
            </div>
        </div>
    )
};