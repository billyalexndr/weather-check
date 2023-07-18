import React from "react";
import { useParams } from "react-router";

export default function City({ onFilter }) {
  
  const { id } = useParams();

  let city = onFilter(id);

  return !city ? (
    <div>City not found</div>
  ) : (
    <div>
      <div className="container">
        <h2>{city.name}</h2>
        <div>
          <div>Temperature: {city.temp} ºC</div>
          <div>Weather: {city.weather}</div>
          <div>Wind: {city.wind} km/h</div>
          <div>Amount of Clouds: {city.clouds}</div>
          <div>Latitude: {city.latitud}º</div>
          <div>Longitude: {city.longitud}º</div>
        </div>
      </div>
    </div>
  );
}
