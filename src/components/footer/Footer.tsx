import React, { useState, useEffect } from 'react';
import { FooterDataType } from './types';

const Footer = () => {
    const [footerData, setFooterData] = useState<FooterDataType | null>(null);

    const getFooterData = () => {
        // eslint-disable-next-line no-undef
        fetch(`${process.env.REACT_APP_API_URL}/week/summary?latitude=52.1&longitude=21.0`)
        .then(response => response.json())
        .then(data => setFooterData(data))
        .catch(error => console.error(`getFooterData error: ${error}`));
    }

    useEffect(()=>{
        getFooterData();
    },[]);

    return <div>
        {footerData ? <div>{JSON.stringify(footerData)}</div> : <div>Loading</div>}
    </div>
}

export default Footer;