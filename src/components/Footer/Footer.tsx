import React, { useState, useEffect, useCallback } from 'react';
import { FooterDataType } from './types';
import { LocationType } from '../../types';
import "./style.css";

const Footer = ({ location }: { location: LocationType }) => {
    const [footerData, setFooterData] = useState<FooterDataType | null>(null);

    const getFooterData = useCallback(() => {
        // eslint-disable-next-line no-undef
        fetch(`${process.env.REACT_APP_API_URL}/week/summary?latitude=${location.latitude}&longitude=${location.longitude}`)
            .then(response => response.json())
            .then(data => setFooterData(data))
            .catch(error => console.error(`getFooterData error: ${error}`));
    }, [location]);

    useEffect(()=>{
        getFooterData();
    }, [location]);

    const roundAndFormatTemperature = (temp: number) => `${temp.toFixed(1)} \u00b0C`;

    const footerSummary = (weather: string[]) => {
        return weather[1] != "" ?  
        <div>This week&apos;s weather will be mostly {weather.join(" and ")} </div>
        : <div>This week&apos;s weather will be {weather[0]} </div>
    }

    return <div className="footer-main">
        {footerData ? <div className="footer-weather">
            {footerSummary(footerData.weather)}
            <div className="footer-items">
                <div>Week:</div>
                <div>Max Temp: {roundAndFormatTemperature(footerData.temperatureMax)}</div>
                <div>Min Temp: {roundAndFormatTemperature(footerData.temperatureMin)}</div>
                <div>Avg Pressure: {footerData.pressure.toFixed(0)} hPa</div>
                <div>Avg Sunshine time: {footerData.sunshine.toFixed(1)} h</div>
            </div>
        </div> : <div>Loading...</div>}
    </div>
}

export default Footer;