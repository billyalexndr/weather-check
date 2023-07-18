import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Alert from "./components/Alert";
import Nav from "./components/Nav";
import WeatherCheck from "./components/WeatherCheck";
import Home from "./components/Home";
import About from "./components/About";
import City from "./components/City";

import axios from "axios";

function App() {
  const [cities, setCities] = useState([]);

  const [foundCity, setFoundCity] = useState(true);

  const apiKey = "70768fa2a74f80d07699f5445c8f3d52";

  function onSearch(city) {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
      .then((json) => {
        let resource = json.data;
        // console.log(resource);
        if (resource.main !== undefined) {
          const city = {
            min: Math.round(resource.main.temp_min),
            max: Math.round(resource.main.temp_max),
            img: resource.weather[0].icon,
            id: resource.id,
            wind: resource.wind.speed,
            temp: resource.main.temp,
            name: resource.name,
            weather: resource.weather[0].main,
            clouds: resource.clouds.all,
            latitud: resource.coord.lat,
            longitud: resource.coord.lon,
          };
          setCities((oldCities) => [...oldCities, city]);
          setFoundCity(true);
        } else {
          setFoundCity(false);
        }
      })
      .catch((e) => {
        setFoundCity(false);
      });
  }

  const onClose = (id) => {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  };

  const handleAlert = () => {
    setFoundCity(true);
  };

  const onFilter = (id) => {
    return cities.filter((c) => c.id === parseInt(id))[0];
  };

  return (
    <Router>
      <Nav onSearch={onSearch} />
      <Alert foundCity={foundCity} handleAlert={handleAlert} />
      <hr />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/weathercheck" element={<WeatherCheck cities={cities} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route
          exact
          path="/city/:id"
          element={<City onFilter={onFilter} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
