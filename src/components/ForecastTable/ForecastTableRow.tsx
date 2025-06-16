import React from "react";
import { ForecastDataType } from "./types";
import "./style.css"

const ForecastTableRow = ({data}:{data: ForecastDataType}) => {
    const weatherNamesMap = new Map<number, { name: string; icon: string }>([
        [0, { name: 'Clear sky', icon: 'fa-sun' }],
        [1, { name: 'Mainly clear', icon: 'fa-sun' }],
        [2, { name: 'Partly cloudy', icon: 'fa-cloud-sun' }],
        [3, { name: 'Overcast', icon: 'fa-cloud' }],
        [45, { name: 'Fog', icon: 'fa-smog' }],
        [48, { name: 'Depositing rime fog', icon: 'fa-smog' }],
        [51, { name: 'Light drizzle', icon: 'fa-cloud-rain' }],
        [53, { name: 'Moderate drizzle', icon: 'fa-cloud-rain' }],
        [55, { name: 'Dense drizzle', icon: 'fa-cloud-showers-heavy' }],
        [56, { name: 'Light freezing drizzle', icon: 'fa-snowflake' }],
        [57, { name: 'Dense freezing drizzle', icon: 'fa-snowflake' }],
        [61, { name: 'Slight rain', icon: 'fa-cloud-rain' }],
        [63, { name: 'Moderate rain', icon: 'fa-cloud-showers-heavy' }],
        [65, { name: 'Heavy rain', icon: 'fa-cloud-showers-heavy' }],
        [66, { name: 'Light freezing rain', icon: 'fa-snowflake' }],
        [67, { name: 'Heavy freezing rain', icon: 'fa-snowflake' }],
        [71, { name: 'Slight snow fall', icon: 'fa-snowflake' }],
        [73, { name: 'Moderate snow fall', icon: 'fa-snowflake' }],
        [75, { name: 'Heavy snow fall', icon: 'fa-snowflake' }],
        [77, { name: 'Snow grains', icon: 'fa-snowflake' }],
        [80, { name: 'Slight rain showers', icon: 'fa-cloud-sun-rain' }],
        [81, { name: 'Moderate rain showers', icon: 'fa-cloud-showers-heavy' }],
        [82, { name: 'Violent rain showers', icon: 'fa-cloud-showers-heavy' }],
        [85, { name: 'Slight snow showers', icon: 'fa-snowflake' }],
        [86, { name: 'Heavy snow showers', icon: 'fa-snowflake' }],
        [95, { name: 'Thunderstorm', icon: 'fa-bolt' }],
        [96, { name: 'Thunderstorm with slight hail', icon: 'fa-bolt' }],
        [99, { name: 'Thunderstorm with heavy hail', icon: 'fa-bolt' }],
    ]);

    const getWeatherName = (code: number) => {
        return weatherNamesMap.get(code)?.name ?? 'Unknown weather code';
    }

    const getWeatherIcon = (code: number) => {
        return weatherNamesMap.get(code)?.icon ?? 'Unknown weather code';
    }

    const formatDate = (dateStr: string) => {
        const [year, month, day] = dateStr.split("-");
        return `${day}/${month}/${year}`;
    };

    return (
        <tr>
            <td>{formatDate(data.date)}</td>
            <td>
                <i className={`fa-solid ${getWeatherIcon(data.weatherCode)}`}></i> {getWeatherName(data.weatherCode)}
            </td>
            <td>{data.temperatureMax} &deg;C</td>
            <td>{data.temperatureMin} &deg;C</td>
            <td>{data.energy.toFixed(2)} kWh</td>
        </tr>
    );

}

export default ForecastTableRow;