import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet'
import "./style.css"
import { LocationType } from "../../types";

const MapLocationPicker = ({ location, setLocation }: { location: LocationType, setLocation: (loc: LocationType) => void }) => {
    const LocationMarker = () => {
        const map = useMap();

        useMapEvents({
            click(e) {
                setLocation({ latitude: e.latlng.lat, longitude: e.latlng.lng });
                map.setView(e.latlng);
            }
        });

        useEffect(() => {
            map.setView([location.latitude, location.longitude]);
        }, [location, map])

        return (
            <Marker position={[location.latitude, location.longitude]}>
                <Popup>
                    latitude: {location.latitude} <br />
                    longitude: {location.longitude}
                </Popup>
            </Marker>
        )
    }

    return (
        <div className="map-container">
            <MapContainer center={[location.latitude, location.longitude]} zoom={7} scrollWheelZoom={false} className="map-location-picker">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker />
            </MapContainer>
        </div>
    )
}

export default MapLocationPicker;