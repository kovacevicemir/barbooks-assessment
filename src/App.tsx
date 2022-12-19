import { useEffect, useState } from "react";
import "./App.css";
import useApi from "./components/useApi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  defaultFilters,
  FiltersContext,
  IFiltersContext,
} from "./context/FiltersContext";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import { filtersLogic } from "./helpers/filtersLogic";

function App() {
  const [filters, setFilters] = useState<IFiltersContext>(defaultFilters);
  const { data } = useApi({ type: "getAllGames", searchQuery: "" });
  const [games, setGames] = useState(data);

  useEffect(() => {
    setGames(data);
  }, [data]);

  useEffect(() => {
    const filteredGames = filtersLogic(data, filters, games);
    setGames(filteredGames);
  }, [filters]);

  return (
    <div className="App">
      <FiltersContext.Provider value={{ filters, setFilters }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home games={games} />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </Router>
      </FiltersContext.Provider>
    </div>
  );
}

export default App;
