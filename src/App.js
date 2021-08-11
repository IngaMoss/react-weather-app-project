import React from "react";
import './App.css';
import Weather from './Weather.js';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a href="https://github.com/IngaMoss/weather-app-react" target="_blank" rel="noreferrer">Open-source
            code</a>, created by Inga Mosienko
        </footer>
      </div>
    </div>
  );
}


