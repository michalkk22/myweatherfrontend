import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import { LocationType } from './types';
import ForecastTable from './components/ForecastTable/ForecastTable';
import ThemeButton from './components/ThemeButton/ThemeButton';
import MapLocationPicker from './components/MapLocationPicker/MapLocationPicker';
import 'leaflet/dist/leaflet.css';

const App = () => {
  const [location, setLocation] = useState<LocationType>({ latitude: 52.1, longitude: 21.0 }); // Warsaw is default if no geolocation permission is given

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      location => { setLocation({ latitude: location.coords.latitude, longitude: location.coords.longitude }) },
      () => { });
  }, []);

  return (
    <div className="main-container">
      <ThemeButton />
      <ForecastTable location={location} />
      <MapLocationPicker location={location} setLocation={setLocation} />
      <Footer location={location} />
    </div>
  );
}

export default App;