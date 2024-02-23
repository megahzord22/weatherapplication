import React from 'react'
import { css } from '@emotion/react'

const monthMap = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
};

function formatDateTime(dateTimeString) {
    const [date, time] = dateTimeString.split(' ')
    const [year, month, day] = date.split('-')
    const [hour, minute] = time.split(':')
    

    let formattedHour = parseInt(hour, 10)
    let ampm = 'AM';
    if (formattedHour > 12) {
        formattedHour -= 12
        ampm = 'PM';
    } else if (formattedHour === 0) {
        formattedHour = 12
    }

    return `${monthMap[month]} ${parseInt(day, 10)}, ${formattedHour}:${minute} ${ampm}`
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32
}

function Weather({ weather }) {
const styles = css`
    background-color: #3498db;
    background-image: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0));
    color: white;
    padding: 10px;
    margin: 10px;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 10px;
    width: 250px;
    text-align: center;
    font-size: 20px;
    `
const mainTempStyles = css`
    font-size: 40px;
`
const tempCelsius = weather.main.temp - 273.15
const tempFahrenheit = celsiusToFahrenheit(tempCelsius)
const minTempCelsius = weather.main.temp_min - 273.15
const minTempFahrenheit = celsiusToFahrenheit(minTempCelsius)
const maxTempCelsius = weather.main.temp_max - 273.15
const maxTempFahrenheit = celsiusToFahrenheit(maxTempCelsius)
const iconUrl = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
    return (
        <div css={styles}>
            <h3>{formatDateTime(weather.dt_txt)}</h3>
            <img src={iconUrl} alt={weather.weather[0].description} />
            <p css={mainTempStyles}><strong>{Math.round(tempFahrenheit)}°F</strong></p>
            <p><strong>Min: </strong>{Math.round(minTempFahrenheit)}°F <strong>Max: </strong>{Math.round(maxTempFahrenheit)}°F</p>
            <p><strong>Conditions: </strong> {capitalizeFirstLetter(weather.weather[0].description)}.</p>
            <p><strong>Chance of Rain: </strong>{weather.pop * 100}%</p>
        </div>
    );
}


export default Weather