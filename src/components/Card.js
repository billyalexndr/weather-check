import "./styles/Card.css";

import { Link } from "react-router-dom";

export default function Card({ name, min, max, img, id, onClose }) {
  return (
    <>
      <div className="card border-dark mb-3">
        <div className="card-header card-container-title">
          <Link to={`/city/${id}`}>
            <h5>{name}</h5>
          </Link>
          <button
            type="button"
            className="close text-primary"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="card-container-text">
          <div className="card-body text-dark">
            <p className="card-text">Min {min}ºC</p>
            <p className="card-text">Max {max}ºC</p>
          </div>
          <img
            src={`http://openweathermap.org/img/wn/${img}@2x.png`}
            alt="img"
          />
        </div>
      </div>
    </>
  );
}
