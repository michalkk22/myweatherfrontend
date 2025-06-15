import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import { LocationType } from './types';

const App = () => {
  const [location, setLocation] = useState<LocationType | null>(null);

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      location => { setLocation({ latitude: location.coords.latitude, longitude: location.coords.longitude }) },
      () => { setLocation({ latitude: 52.1, longitude: 21.0 }) });
  }, []);

  return (
    <div>
      <Footer />
    </div>
  );
}

export default App;