import React, { useState, useEffect, useCallback } from 'react';
import { FooterDataType } from './types';
import { LocationType } from '../../types';

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

    return <div>
        {footerData ? <div>{JSON.stringify(footerData)}</div> : <div>Loading</div>}
    </div>
}

export default Footer;