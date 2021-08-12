import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Alert from "@material-ui/lab/Alert";
import useCityList from "../../Hooks/useCityList";
import CityInfo from "../CityInfo";
import Weather from "../Weather";
import { AiFillDelete } from "react-icons/ai";
import { IconContext } from "react-icons";
import { getCityCode } from "../../Utilities/utilities";
import {
  useWeatherStateContext,
  useWeatherDispatchContext,
} from "../../WeatherContext";

const CityListItem = React.memo(
  ({ city, countryCode, weather, eventOnClickCity, eventOnClickDelete }) => {
    return (
      <div className='cityItem'>
        <ListItem button onClick={() => eventOnClickCity(city, countryCode)}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item md={6} xs={12}>
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
        <IconContext.Provider value={{ size: "2em" }}>
          <AiFillDelete className="delete" onClick={() => eventOnClickDelete(city)}/>
        </IconContext.Provider>
      </div>
    );
  }
);

const renderCityAndCountry = (eventOnClickCity,) => (cityCountry, weather, eventOnClickDelete,) => {
  const { city, countryCode } = cityCountry;
  return (
    <CityListItem
      key={getCityCode(city, countryCode)}
      eventOnClickCity={eventOnClickCity}
      eventOnClickDelete={eventOnClickDelete}
      weather={weather}
      {...cityCountry}
      city={city}
    />
  );
};

const CityList = ({ cities, onClickCity, eventOnClickDelete }) => {
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
            ],
            eventOnClickDelete,
            cityAndCountry.city
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
