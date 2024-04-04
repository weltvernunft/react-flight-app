import React, { useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import Booking from "./Booking.jsx";
import jsonData from "../assets/flights.json";
import Button from "./Button.jsx";
import "./DetailedFlightCard.scss";
import depDenotion from "../assets/img/dep-denotion.png";

function DetailedFlightCard() {
  const { flightNumber } = useParams(); // Access the flightNumber parameter from the URL
  const navigate = useNavigate(); // Use useNavigate to get the navigate function
  const flight = jsonData.find(
    (flight) => flight.flightNumber === flightNumber
  ); // Find the flight by flightNumber

  if (!flight) {
    return <div>Flight not found</div>;
  }

  return (
    <div className="detailed-card">
      <div className="detailed-card-container">
        <button className="go-back-btn" onClick={() => navigate(-1)}>
          ←
        </button>
        <div className="grid-container">
          <h2 className="grid-item airline-number">
            {flight.airline} - {flight.flightNumber}
          </h2>
          <p className="grid-item">
            <span className="attr-title">Duration:</span>{" "}
            {flight.duration}
          </p>
          <p className="grid-item">
            <span className="attr-title">Transfers:</span>{" "}
            {flight.transfers}
          </p>
          <p className="grid-item">
            <span className="attr-title">Cost:</span> {flight.cost}
          </p>{" "}
          <p className="grid-item">
            <span className="attr-title">Flight Class:</span>{" "}
            {flight.flightClass}
          </p>
          <p className="grid-item">
            <span className="attr-title">Baggage Included:</span>{" "}
            {flight.baggageIncluded ? "Yes" : "No"}
          </p>
        </div>
        <img src={depDenotion} alt="" className="dep-denotion" />
        <div className="grid-container">
          <p className="grid-item">
            <span className="attr-title">Departure:</span>{" "}
            {flight.departure}
          </p>
          <p className="grid-item">
            <span className="attr-title">Destination:</span>{" "}
            {flight.destination}
          </p>
          <p className="grid-item">
            <span className="attr-title">Departure Time:</span>{" "}
            {flight.departureTime}
          </p>
          <p className="grid-item">
            <span className="attr-title">Arrival Time:</span>{" "}
            {flight.arrivalTime}
          </p>
        </div>
        <Booking />
        <br />
      </div>
    </div>
  );
}

export default DetailedFlightCard;
