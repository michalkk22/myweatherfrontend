import React, { useCallback, useEffect, useState } from "react";
import { LocationType } from "../../types";
import { ForecastDataType } from "./types";

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

    return <div className="forecast-table-container">
        {forecastData ? <div>{forecastData[0].date}</div>
        : <div>Loading...</div>}
    </div>
}

export default ForecastTable;