import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { searchSchema } from "../../Utilities/searchValidation";
const Search = ({ callback }) => {
  const [newCity, setNewCity] = useState("");
  const [newCountryCode, setNewCountryCode] = useState("");
  const updateCity = (e) => setNewCity(e.target.value);
  const updateCountryCode = (e) => setNewCountryCode(e.target.value);

  const createNewCity = async (e) => {
    e.preventDefault();
    let dataSearch = {
      city: newCity,
      countryCode: newCountryCode,
    };
    const isValid = await searchSchema.isValid(dataSearch);
    if (isValid) {
      callback(newCity, newCountryCode);
      setNewCountryCode("");
      setNewCity("");
    }else{
      alert('Search error, both fields are required and country code must have two characters.')
    }
  };

  return (
    <form className="searchForm">
      <TextField
        type="text"
        variant="outlined"
        label="City"
        color="primary"
        className="formItem"
        onChange={updateCity}
        value={newCity}
        name="city"
        required
      />
      <TextField
        type="text"
        variant="outlined"
        label="Country Code"
        color="primary"
        className="formItem"
        onChange={updateCountryCode}
        value={newCountryCode}
        name="city"
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="formItem"
        onClick={createNewCity}
      >
        Search
      </Button>
    </form>
  );
};

export default Search;
