import moment from "moment";
import { toCelsius } from "../utilities";

const getForecastItemList = (data) => {
  const interval = [3, 6, 9, 12, 15, 18];

  const forecastItemListAux = data.list
    .filter((item, index) => interval.includes(index))
    .map((item) => {
      return {
        hour: moment.unix(item.dt).hour(),
        weekDay: moment.unix(item.dt).format("dddd"),
        state: item.weather[0].main.toLowerCase(),
        temperature: toCelsius(item.main.temp),
      };
    });
  return forecastItemListAux;
};

export default getForecastItemList
