import React from 'react';

function Weather({ weather }) {
    return (
        <div className="weather-card">
            <h3>{weather.dt_txt}</h3>
            <p>{weather.weather[0].description}</p>
        </div>
    );
}


export default Weather