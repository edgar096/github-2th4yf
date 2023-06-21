import { useState } from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import LocationForm from './UI/Form/LocationForm';
import 'leaflet/dist/leaflet.css';
import { MantineProvider, Text } from '@mantine/core';

import { ErrorBoundary } from 'react-error-boundary';
import MapboxWidget from './Map/MapboxWidget';

import FallbackComponent from './UI/ErrorBoundary/FallbackComponent';
function App() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [data, setData] = useState({});
  // const [error, setError] = useState(null);

  async function getData(location) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

      let response = await fetch(url);
      // if (!response.ok) {
      //   throw new Error('Bad API Response');
      // }
      let urlData = await response.json();
      setData(urlData);
    } catch (error) {
      //console.log(error);
      // setError(error);
      throw new Error('Bad API Response');
    }
  }

  const handleSubmitLocation = (e) => {
    e.preventDefault();
    getData(e.target.locationSubmit.value);
  };
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <>
        <h1>Weather Application </h1>
        <LocationForm handler={handleSubmitLocation} />
        <ErrorBoundary FallbackComponent={FallbackComponent} key={data.cod}>
          {data.cod && (
            <>
              <h1>Location:{data.name}</h1>
              <MapboxWidget data={data} />
            </>
          )}
        </ErrorBoundary>
      </>
    </MantineProvider>
  );
}

export default App;
