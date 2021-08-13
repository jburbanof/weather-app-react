import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import CityList from "../Components/CityList";
import AppFrame from "../Components/AppFrame";
import Search from "../Components/Search";

const MainPage = ({ actions, data }) => {
  const history = useHistory();

  const onClickHandler = (city, countryCode) => {
    history.push(`/city/${countryCode}/${city}`);
  };

  const [cityCountry, setCityCountry] = useState([]);

  const createNewTask = (newCity, newCountryCode) => {
    setCityCountry([
      ...cityCountry,
      { city: newCity, countryCode: newCountryCode },
    ]);
  };
  const eventOnClickDelete = (city) => {
    setCityCountry(
      [...cityCountry].filter((i) => {
        return i.city !== city;
      })
    );
  };
  useEffect(() => {
        let data= localStorage.getItem('cityCountry')
        console.log(data)
        if (data){
            setCityCountry(JSON.parse(data))
        }else{
           setCityCountry([{city:'Bogotá', countryCode: 'CO'}]) 
           console.log('test',cityCountry)
        }
        
  },[cityCountry])
  useEffect(() => {
    localStorage.setItem("cityCountry", JSON.stringify(cityCountry));
  }, [cityCountry]);

  return (
    <AppFrame>
      <Search callback={createNewTask} />

      {cityCountry.length > 0 && (
        <Paper elevation={3}>
          <CityList
            data={data}
            actions={actions}
            cities={cityCountry}
            onClickCity={onClickHandler}
            eventOnClickDelete={eventOnClickDelete}
          />
        </Paper>
      )}
    </AppFrame>
  );
};

export default MainPage;
