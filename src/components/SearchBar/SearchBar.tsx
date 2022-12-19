import React, { useContext } from "react";
import { FiltersContext } from "../../context/FiltersContext";
import styles from "./searchBar.module.css";

interface ISearchBarProps {}

const SearchBar: React.FC<ISearchBarProps> = () => {
  //@ts-ignore
  const { filters, setFilters } = useContext(FiltersContext);

  return (
    <div className={styles.searchBarContainer}>
      <input
        className={styles.searchBarInput}
        onChange={(e) => {
          setFilters({ ...filters, title: e.target.value });
        }}
        placeholder="Search by name..."
      />
    </div>
  );
};

export default SearchBar;
