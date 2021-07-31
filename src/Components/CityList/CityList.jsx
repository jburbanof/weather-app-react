import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Alert from "@material-ui/lab/Alert";
import useCityList from "../../Hooks/useCityList";
import CityInfo from "../CityInfo";
import Weather from "../Weather";
import { getCityCode } from "../../Utilities/utilities";
import { useWeatherStateContext, useWeatherDispatchContext } from "../../WeatherContext";

const CityListItem = React.memo(
  ({ city, countryCode, weather, eventOnClickCity }) => {
    return (
      <ListItem button onClick={() => eventOnClickCity(city, countryCode)}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item md={9} xs={12}>
            <CityInfo city={city} countryCode={countryCode} />
          </Grid>
          <Grid item md={3} xs={12}>
            <Weather
              temperature={weather && weather.temperature}
              state={weather && weather.state}
            />
          </Grid>
        </Grid>
      </ListItem>
    );
  }
);

const renderCityAndCountry = (eventOnClickCity) => (cityCountry, weather) => {
  const { city, countryCode } = cityCountry;
  return (
    <CityListItem
      key={getCityCode(city, countryCode)}
      eventOnClickCity={eventOnClickCity}
      weather={weather}
      {...cityCountry}
    />
  );
};

const CityList = ({ cities, onClickCity }) => {
  const actions = useWeatherDispatchContext();
  const data = useWeatherStateContext();
  const { allWeather } = data;
  const { error, setError } = useCityList(cities, allWeather, actions);

  return (
    <div>
      {error && (
        <Alert onClose={() => setError(null)} severity="error">
          {error}
        </Alert>
      )}
      <List>
        {cities.map((cityAndCountry) =>
          renderCityAndCountry(onClickCity)(
            cityAndCountry,
            allWeather[
              getCityCode(cityAndCountry.city, cityAndCountry.countryCode)
            ]
          )
        )}
      </List>
    </div>
  );
};
CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      countryCode: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default React.memo(CityList);
