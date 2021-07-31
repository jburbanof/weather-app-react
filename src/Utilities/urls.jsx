const apiKey = "6eed5ecf1b61d636500feff49314d96a";

export const getWeatherUrl = (city, countryCode) =>
  `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`;
export const getForecastUrl = (city, countryCode) =>
  `http://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiKey}`;
