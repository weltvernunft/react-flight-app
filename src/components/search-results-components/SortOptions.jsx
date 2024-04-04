import React from "react";
import "./SortOptions.scss";
import Button from "../Button";

function SortOptions({ sortingOrder, onSortByPrice, onSortByDuration }) {
  return (
    <div className="sort-options">
      <Button onClick={onSortByPrice}>
        Sort by Price ({sortingOrder.price})
      </Button>
      <Button onClick={onSortByDuration}>
        Sort by Duration ({sortingOrder.duration})
      </Button>
    </div>
  );
}

export default SortOptions;
