import React from "react";
import "./NotFound.scss";

function NotFound() {
  const className = "not-found-container";

  return (
    <div className={className}>
      <h1 className="not-found-title">404 - Not Found</h1>
      <p className="not-found-message">
        The page you're looking for does not exist.
      </p>
    </div>
  );
}

export default NotFound;
