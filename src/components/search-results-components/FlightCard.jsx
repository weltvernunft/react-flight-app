import React from "react";
import "./FlightCard.scss";
import depDenotion from "../../assets/img/dep-denotion.png";

const FlightCard = ({ ticket }) => {
  const {
    airline,
    flightNumber,
    departure,
    destination,
    departureTime,
    arrivalTime,
    duration,
    transfers,
    cost,
  } = ticket;

  return (
    <div className="card">
      <h2>
        {airline} - {flightNumber}
      </h2>
      <div className="card__departure-image-container">
        <img
          src={depDenotion}
          alt="Departure"
          className="card__departure-image"
        />
      </div>
      <div className="card__travel-scheme">
        <div className="card__departure">
          <p>
            <span className="card__attr-title">Departure:</span>
            <br />
            {departure}
          </p>
          <p>{departureTime}</p>
        </div>
        <div className="card__arrival">
          <p>
            <span className="card__attr-title">Destination:</span>
            <br />
            {destination}
          </p>
          <p>{arrivalTime}</p>
        </div>
      </div>
      <p>
        <span className="card__attr-title">Duration:</span> {duration}
      </p>
      <p>
        <span className="card__attr-title">Transfers:</span> {transfers}
      </p>
      <h4 className="card__price">${cost}</h4>
    </div>
  );
};

export default FlightCard;
