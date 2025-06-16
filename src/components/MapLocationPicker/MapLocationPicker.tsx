import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet'
import "./style.css"
import { LocationType } from "../../types";
import L from "leaflet";

const markerIcon = new L.DivIcon({
    html: '<i class="fa-solid fa-location-dot" style="font-size:32px;color:red"></i>',
    className: 'fa-leaflet-marker',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
});

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
            <Marker position={[location.latitude, location.longitude]} icon={markerIcon}>
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