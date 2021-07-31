import React, { useMemo } from "react";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import CityInfo from "../Components/CityInfo";
import Weather from "../Components/Weather";
import WeatherDetails from "../Components/WeatherDetails";
import ForecastChart from "../Components/ForecastChart";
import Forecast from "../Components/Forecast";
import AppFrame from "../Components/AppFrame";
import useCityPage from "../Hooks/useCityPage";
import useCityList from "../Hooks/useCityList";
import { getCityCode } from "../Utilities/utilities";
import {
  useWeatherDispatchContext,
  useWeatherStateContext,
} from "../WeatherContext";
const CityPage = () => {
  
  const data = useWeatherStateContext();
  const actions = useWeatherDispatchContext();
  const { allWeather, allChartData, allForecastItemList } = data;
  const { city, countryCode } = useCityPage(
    actions,
    allChartData,
    allForecastItemList
  );
  const cities = useMemo(() => [{ city, countryCode }], [city, countryCode]);
  useCityList(cities, allWeather, actions);
  const cityCode = getCityCode(city, countryCode);
  const weather = allWeather[cityCode];
  const chartData = allChartData[cityCode];
  const forecastItemList = allForecastItemList[cityCode];
  const state = weather && weather.state;
  const temperature = weather && weather.temperature;
  const humidity = weather && weather.humidity;
  const wind = weather && weather.wind;

  return (
    <AppFrame>
      <Grid
        container
        justifyContent="space-around"
        direction="column"
        spacing={2}
      >
        <Grid
          item
          container
          xs={12}
          justifyContent="center"
          alignItems="flex-end"
        >
          <CityInfo city={city} countryCode={countryCode} />
        </Grid>
        <Grid item xs={12}>
          <Weather state={state} temperature={temperature} />
          {humidity && wind && (
            <WeatherDetails humidity={humidity} wind={wind} />
          )}
        </Grid>
        <Grid>{!chartData && !forecastItemList && <LinearProgress />}</Grid>
        <Grid item>{chartData && <ForecastChart data={chartData} />}</Grid>
        <Grid item>
          {forecastItemList && <Forecast forecastItemList={forecastItemList} />}
        </Grid>
      </Grid>
    </AppFrame>
  );
};

export default CityPage;
