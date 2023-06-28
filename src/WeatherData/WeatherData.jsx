import { Grid } from '@mantine/core';
import { string } from 'prop-types';
const WeatherData = ({ data }) => {
  return (
    <>
      <Grid>
        <Text fz="lg">Location{<Text fw={700}>{data.name}</Text>}</Text>
        <Grid.Col span={9}>{data.name}</Grid.Col>
        <Grid.Col span={4}>2</Grid.Col>
        <Grid.Col span={4}>3</Grid.Col>
        <Grid.Col span={4}>4</Grid.Col>
      </Grid>
      {/* <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
        <Grid.Col span={6}>
          Temperature: {Math.round(data.main.temp)}ºC
        </Grid.Col>
        <Grid.Col span={6}>
          Feels Like: {Math.round(data.main.feels_like)}ºC
        </Grid.Col>
        <Grid.Col span={6}>
          <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
            <Grid.Col span={6}>
              Minimum: {Math.round(data.main.temp_min)}ºC
            </Grid.Col>
            <Grid.Col span={6}>
              Maximum:
              {Math.round(data.main.temp_max)}ºC
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col span={6}>Current Humidity: {data.main.humidity}%</Grid.Col>
      </Grid> */}
    </>
  );
};

WeatherData.propTypes = {
  data: string,
};

export default WeatherData;
