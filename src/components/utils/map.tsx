'use client';

import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

export function Map() {
    const turkey = [38.9573415, 35.240741];
    return (
        <MapContainer
            center={turkey}
            zoom={6}
            scrollWheelZoom={false}
            style={{
                width: '100%',
                height: '100%',
            }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
}
