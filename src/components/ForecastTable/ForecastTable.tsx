import React, { useCallback, useEffect, useState } from "react";
import { LocationType } from "../../types";
import { ForecastDataType } from "./types";
import "./style.css"
import ForecastTableColumn from "./ForecastTableColumn";

const ForecastTable = ({location}:{location: LocationType}) => {
    const [forecastData, setForecastData] = useState<Array<ForecastDataType> | null>(null);

    const getForecastData = useCallback(()=>{
        // eslint-disable-next-line no-undef
        fetch(`${process.env.REACT_APP_API_URL}/week?latitude=${location.latitude}&longitude=${location.longitude}`)
            .then(response => response.json())
            .then(data => setForecastData(data))
            .catch(error => console.error(`getFooterData error: ${error}`));
    },[location]);

    useEffect(()=>{
        getForecastData();
    },[location]);

    return (
        <div className="forecast-table-wrapper">
            <div className="forecast-table">
                <div className="forecast-table-head forecast-table-column">
                    <div>Date</div>
                    <div>Weather</div>
                    <div>Max temperature</div>
                    <div>Min temperature</div>
                    <div>Energy forecast</div>
                </div>
        {forecastData ? (
                        forecastData.map((element) => (
                            <ForecastTableColumn key={element.date} data={element} />
                        ))
                    ) : (
                    <div>
                        Loading...
                    </div>
                )}
            </div>
        </div>
    );

}

export default ForecastTable;