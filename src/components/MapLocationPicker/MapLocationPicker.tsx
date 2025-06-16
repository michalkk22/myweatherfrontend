import React from "react";
import { MapContainer, TileLayer } from 'react-leaflet'
import "./style.css"
import { LocationType } from "../../types";

const MapLocationPicker = ({ currentLocation }: { currentLocation: LocationType }) => {
    // const [location, setLocation] = useState<LocationType>({ latitude: 52.1, longitude: 21.0 });

    return (
        <div className="map-container">
            <MapContainer center={[currentLocation.latitude,currentLocation.longitude]} zoom={10} scrollWheelZoom={false} className="map-location-picker">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    )
}

export default MapLocationPicker;