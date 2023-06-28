import { useState } from 'react';
import './App.css';

import LocationForm from './UI/Form/LocationForm';

import { MantineProvider, Title, Text } from '@mantine/core';

import { ErrorBoundary } from 'react-error-boundary';
import MapboxWidget from './Map/MapboxWidget';

import FallbackComponent from './UI/ErrorBoundary/FallbackComponent';
import WeatherData from './WeatherData/WeatherData';
function App() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [data, setData] = useState({});

  async function getData(location) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

      let response = await fetch(url);
      let urlData = await response.json();
      setData(urlData);
    } catch (error) {
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
        <Title order={1}>Weather Application </Title>
        <LocationForm handler={handleSubmitLocation} />
        <ErrorBoundary FallbackComponent={FallbackComponent} key={data.cod}>
          {data.cod && (
            <>
              <div>
                <WeatherData data={data} />
                <Text fz="lg">Location{<Text fw={700}>{data.name}</Text>}</Text>
              </div>
              <MapboxWidget data={data} />
            </>
          )}
        </ErrorBoundary>
      </>
    </MantineProvider>
  );
}

export default App;
