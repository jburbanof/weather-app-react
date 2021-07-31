import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomePage from "./Pages/WelcomePage";
import MainPage from "./Pages/MainPage";
import CityPage from "./Pages/CityPage";
import NotFound from "./Pages/NotFound";
import { WeatherContext } from "./WeatherContext";

const App = () => {
  return (
    <WeatherContext>
      <Router>
        <Switch>
          <Route exact path="/">
            <WelcomePage />
          </Route>
          <Route path="/main">
            <MainPage />
          </Route>
          <Route path="/city/:countryCode/:city">
            <CityPage />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </WeatherContext>
  );
};

export default App;
