// FilterOptions.jsx
import React from "react";
import "./FilterOptions.scss";
import Button from "../Button.jsx";

function FilterOptions({
  maxTransfers,
  handleCheckboxChange,
  handleFilterByTransfers,
}) {
  return (
    <div className="transfer-container">
      <div className="transfer-options">
        <label>
          <input
            type="checkbox"
            value={0}
            checked={maxTransfers === 0}
            onChange={handleCheckboxChange}
          />
          No transfers
        </label>
        <label>
          <input
            type="checkbox"
            value={1}
            checked={maxTransfers === 1}
            onChange={handleCheckboxChange}
          />
          1 transfer
        </label>
        <label>
          <input
            type="checkbox"
            value={2}
            checked={maxTransfers === 2}
            onChange={handleCheckboxChange}
          />
          2 transfers
        </label>
      </div>
      <Button onClick={handleFilterByTransfers} className="transfer-btn">
        Filter
      </Button>
      <hr className="divider" />
    </div>
  );
}

export default FilterOptions;
