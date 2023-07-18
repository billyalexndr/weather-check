import SearchBar from "./SearchBar.js";
import "./styles/Nav.css";

import { NavLink } from "react-router-dom";


const Nav = ({ onSearch }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <div>
          <h1 className="navbar-brand">WeatherCheck</h1>
            <NavLink to="/Home">
              <button type="button" className="btn btn-start btn-dark mr-2">
                Home
              </button>
            </NavLink>
            <NavLink to="/WeatherCheck">
              <button type="button" className="btn btn-dark mr-2">
                Weather Check
              </button>
            </NavLink>
            <NavLink to="/About">
              <button type="button" className="btn btn-dark">
                About
              </button>
            </NavLink>
        </div>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
};

export default Nav;
