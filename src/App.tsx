import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import { LocationType } from './types';

const App = () => {
  const [location, setLocation] = useState<LocationType>({ latitude: 52.1, longitude: 21.0 }); // Warsaw is default if no geolocation permission is given

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      location => { setLocation({ latitude: location.coords.latitude, longitude: location.coords.longitude }) },
      () => { });
  }, []);

  return (
    <div>
      <Footer location={location} />
    </div>
  );
}

export default App;