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

    return <div className='footer-main'>
        {footerData ? <div className='footer-weather'>
            <div className='footer-items'>
                <div>Min Temp: {roundAndFormatTemperature(footerData.temperatureMin)}</div>
                <div>Max Temp: {roundAndFormatTemperature(footerData.temperatureMax)}</div>
                <div>Avg Pressure: {footerData.pressure.toFixed(0)} hPa</div>
                <div>Avg Sunshine time: {footerData.sunshine.toFixed(1)} h</div>
            </div>
            <div>This week on average weather will be {footerData.weather.join(" or ")} </div>
        </div> : <div>Loading...</div>}
    </div>
}

export default Footer;