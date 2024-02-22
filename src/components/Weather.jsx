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
    const [date, time] = dateTimeString.split(' ');
    const [year, month, day] = date.split('-');
    const [hour, minute] = time.split(':');
    
    // Convert hour to 12-hour format and determine AM/PM
    let formattedHour = parseInt(hour, 10);
    let ampm = 'AM';
    if (formattedHour > 12) {
        formattedHour -= 12;
        ampm = 'PM';
    } else if (formattedHour === 0) {
        formattedHour = 12;
    }

    return `${monthMap[month]} ${parseInt(day, 10)}, ${formattedHour}:${minute} ${ampm}`;
}

function Weather({ weather }) {
    const styles = css`
  background-color: lavenderblush;
  color: mediumvioletred;
  margin: 0;
  padding: 10px;
`
    return (
        <div className="weather-card">
            <h3>{formatDateTime(weather.dt_txt)}</h3>
            <p>{weather.weather[0].description}</p>
            {/* Add more weather information here if needed */}
        </div>
    );
}


export default Weather