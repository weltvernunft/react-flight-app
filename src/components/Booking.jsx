import React, { useState } from "react";
import "./Booking.scss";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handler to submit the form
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log(formData);
    // Set isSuccessfullySubmitted to true after successful submission
    setIsSuccessfullySubmitted(true);
  };

  return (
    <div className="booking-container">
      {!isSuccessfullySubmitted && (
        <h1 className="booking-title">Book this flight</h1>
      )}
      {isSuccessfullySubmitted ? (
        <div className="success" style={{ color: "green" }}>
          Booking successful!
        </div>
      ) : (
        <form className="booking-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      )}
    </div>
  );
}

export default Booking;
