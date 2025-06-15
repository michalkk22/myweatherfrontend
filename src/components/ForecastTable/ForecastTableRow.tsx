import React from "react";
import { ForecastDataType } from "./types";
import "./style.css"

const ForecastTableRow = ({data}:{data: ForecastDataType}) => {
    return <div className="forecast-table-row">
        <div>{data.date}</div>
        <div>{data.temperatureMax} &deg;C</div>
        <div>{data.temperatureMin} &deg;C</div>
        <div>{data.energy} kWh</div>
    </div>
}

export default ForecastTableRow;