import { useState, useEffect } from "react";
import axios from "axios";
import getAllWeather from "../Utilities/transform/getAllWeather";
import { getWeatherUrl } from "../Utilities/urls";
import { getCityCode } from "../Utilities/utilities";

const useCityList = (cities, allWeather, actions) => {
  const [error, setError] = useState(null);
  useEffect(() => {
    const setWeather = async (city, countryCode) => {
      const url = getWeatherUrl(city, countryCode);

      try {
        
        const propName = [getCityCode(city, countryCode)]
        actions({type: 'SET_ALL_WEATHER', payload: {[propName]:{}}})
        const response = await axios.get(url);

        const allWeatherAux = getAllWeather(response, city, countryCode);

        actions({type: 'SET_ALL_WEATHER', payload: allWeatherAux})
      } catch (error) {
        if (error.response) {
          setError("Weather Server Error");
        } else if (error.request) {
          setError("Verify Your Connection");
        } else {
          setError("Un-expected Error");
        }
      }
    };
    cities.forEach(({ city, countryCode }) => {
      if(!allWeather[getCityCode(city, countryCode)]){
        setWeather(city, countryCode);
      }
      
    });
  }, [cities, actions, allWeather]);
  return { error, setError };
};

export default useCityList;
