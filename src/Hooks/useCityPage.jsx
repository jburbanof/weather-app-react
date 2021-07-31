import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import getChartData from "../Utilities/transform/getChartData";
import { getForecastUrl } from "../Utilities/urls";
import getForecastItemList from "../Utilities/transform/getForecastItemList";
import { getCityCode } from "../Utilities/utilities";

const useCityPage = (actions, allChartData, allForecastItemList ) => {
  const { city, countryCode } = useParams();
  useEffect(() => {
    const getForecast = async () => {
      const url = getForecastUrl(city, countryCode);
      const cityCode = getCityCode(city, countryCode);
      try {
        const { data } = await axios.get(url);
        const dataAux = getChartData(data);

        //onSetChartData({ [cityCode]: dataAux });
        actions({type: 'SET_CHART_DATA', payload: {[cityCode]: dataAux}})
        const forecastItemListAux = getForecastItemList(data);
        //onSetForecastItemList({ [cityCode]: forecastItemListAux });
        actions({type: 'SET_FORECAST_ITEM_LIST', payload: {[cityCode]: forecastItemListAux}})
      } catch (error) {
        console.log("Error");
      }
    };
    const cityCode = getCityCode(city, countryCode)
    if(allChartData && allForecastItemList && !allChartData[cityCode] && !allForecastItemList[cityCode]){
      getForecast();
    }
    
  }, [city, countryCode, actions, allChartData, allForecastItemList]);
  return { city, countryCode };
};

export default useCityPage;
