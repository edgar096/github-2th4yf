import { Grid, Text } from '@mantine/core';
import { string } from 'prop-types';
import { IconSunHigh } from '@tabler/icons-react';
const WeatherData = ({ data }) => {
  const dateFormater = (timestamp) => {
    const date = new Date(timestamp * 1000);
    // const hours = date.getHours();
    // const minutes = date.getMinutes();
    // return hours + ':' + minutes;
    return date.toLocaleTimeString('default');
  };
  return (
    <>
      <Grid>
        {/* <Text fz="lg">Location{<Text fw={700}>{data.name}</Text>}</Text> */}
        <Grid.Col span={6}>Sunrise: {dateFormater(data.sys.sunrise)}</Grid.Col>
        <Grid.Col span={6}>Sunset: {dateFormater(data.sys.sunset)}</Grid.Col>
        <Grid.Col span={2}>
          <IconSunHigh />
        </Grid.Col>
        <Grid.Col span={5}>
          <Text fz="lg" fw={700}>
            Location
          </Text>
        </Grid.Col>
        <Grid.Col span={5}>
          <Text fz="lg">{data.name}</Text>
        </Grid.Col>

        <Grid.Col span={6}>Temperature:{Math.round(data.main.temp)}ºC</Grid.Col>
        <Grid.Col span={6}>
          Feels Like: {Math.round(data.main.feels_like)}ºCºC
        </Grid.Col>
        <Grid.Col span={6}>
          Minimum: {Math.round(data.main.temp_min)}ºC
        </Grid.Col>
        <Grid.Col span={6}>
          Maximum: {Math.round(data.main.temp_max)}ºC
        </Grid.Col>
        <Grid.Col span={12}>Current Humidity: {data.main.humidity}%</Grid.Col>
      </Grid>
    </>
  );
};

WeatherData.propTypes = {
  data: string,
};

export default WeatherData;
