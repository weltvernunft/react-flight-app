import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SearchResults from "./components/SearchResults";
import Booking from "./components/Booking";
import NotFound from "./components/NotFound";
import Navigation from "./components/Navigation";
import DetailedFlightCard from "./components/DetailedFlightCard.jsx"; // Import DetailedFlightCard

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header Component */}
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route
            path="/search/:flightNumber"
            element={<DetailedFlightCard />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
