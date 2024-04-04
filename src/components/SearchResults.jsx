import React, { useState } from "react";
import { Link } from "react-router-dom";
import jsonData from "../assets/flights.json";
import "./SearchResults.scss";
import FlightCard from "./search-results-components/FlightCard.jsx";
import FilterOptions from "./search-results-components/FilterOptions";
import SortOptions from "./search-results-components/SortOptions";
import SearchBar from "./search-results-components/SearchBar";

function SearchResults() {
  const [maxTransfers, setMaxTransfers] = useState(0);
  const [sortingOrder, setSortingOrder] = useState({
    price: "ascending",
    duration: "ascending",
  });
  const [filteredTickets, setFilteredTickets] = useState([]);

  const handleFilterByTransfers = () => {
    const filtered = jsonData.filter(
      (ticket) => ticket.transfers <= maxTransfers
    );
    setFilteredTickets(filtered);
  };

  const handleCheckboxChange = (event) => {
    setMaxTransfers(parseInt(event.target.value, 10));
  };

  const handleSortByPrice = () => {
    const sortedTickets = [...filteredTickets].sort((a, b) => {
      return sortingOrder.price === "ascending"
        ? a.cost - b.cost
        : b.cost - a.cost;
    });
    setSortingOrder({
      ...sortingOrder,
      price: sortingOrder.price === "ascending" ? "descending" : "ascending",
    });
    setFilteredTickets(sortedTickets);
  };

  const handleSortByDuration = () => {
    const sortedTickets = [...filteredTickets].sort((a, b) => {
      const durationA = convertDurationToMinutes(a.duration);
      const durationB = convertDurationToMinutes(b.duration);
      return sortingOrder.duration === "ascending"
        ? durationA - durationB
        : durationB - durationA;
    });
    setSortingOrder({
      ...sortingOrder,
      duration:
        sortingOrder.duration === "ascending" ? "descending" : "ascending",
    });
    setFilteredTickets(sortedTickets);
  };

  const convertDurationToMinutes = (duration) => {
    const [hours, minutes] = duration.split(" ");
    return parseInt(hours) * 60 + parseInt(minutes);
  };

  const handleSearch = (query) => {
    const filtered = jsonData.filter((ticket) =>
      ticket.airline.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTickets(filtered);
  };

  return (
    <div className="search-view">
      <div className="filter-sort-div">
        <SearchBar onSearch={handleSearch} />
        <FilterOptions
          maxTransfers={maxTransfers}
          handleCheckboxChange={handleCheckboxChange}
          handleFilterByTransfers={handleFilterByTransfers}
        />
        <SortOptions
          sortingOrder={sortingOrder}
          onSortByPrice={handleSortByPrice}
          onSortByDuration={handleSortByDuration}
        />
      </div>

      <div className="filtered-tickets">
        {filteredTickets.map((ticket) => (
          <Link
            to={`/search/${ticket.flightNumber}`}
            className="nav-link"
            key={ticket.flightNumber}
          >
            <FlightCard ticket={ticket} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
