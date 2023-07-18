import { useState } from "react";

import "./styles/SearchBar.css";
import { useNavigate } from 'react-router-dom';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };

  const navigate = useNavigate();

  return (
    <form className="form-inline">
      <input
        id="input"
        className="form-control mr-sm-2 form-input"
        type="text"
        value={city}
        placeholder="Enter Name City..."
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
        <button
          className="btn btn-primary my-2 my-sm-0"
          type="onSubmit"
          onClick={(e) => {
            e.preventDefault();
            onSearch(city);
            setCity("");
            navigate('/WeatherCheck');
          }}
        >
          Search
        </button>

    </form>
  );
}
