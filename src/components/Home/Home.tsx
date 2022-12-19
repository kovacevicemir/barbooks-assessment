import React from "react";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";
import Card from "../Card/Card";
import styles from "./home.module.css";

//Getting CORS error.. Mocked categories manually
export const categories = [
  "mmorpg",
  "shooter",
  "strategy",
  "moba",
  "racing",
  "sports",
  "social",
  "sandbox",
  "open-world",
  "survival",
  "pvp",
  "pve",
  "pixel",
  "voxel",
  "zombie",
  "turn-based",
  "first-person",
  "third-Person",
  "top-down",
  "tank",
  "space",
  "sailing",
  "side-scroller",
  "superhero",
  "permadeath",
  "card",
  "battle-royale",
  "mmo",
  "mmofps",
  "mmotps",
  "3d",
  "2d",
  "anime",
  "fantasy",
  "sci-fi",
  "fighting",
  "action-rpg",
  "action",
  "military",
  "martial-arts",
  "flight",
  "low-spec",
  "tower-defense",
  "horror",
  "mmorts",
].map((i) => {
  return { value: i, label: i };
});

interface IHomeProps {
  games: object[];
}

const Home: React.FC<IHomeProps> = ({ games }) => {
  return (
    <div className={styles.homeContainer}>
      <Header
        title="Find & track the best free-to-play games!"
        subtitle="Search for what to play next!"
      />
      <SearchBar />
      <div className={styles.filtersContainer}>
        <Filter
          label="Filtert by Platform"
          type="platform"
          filterItems={[
            { value: "ALL", label: "All" },
            { value: "PC", label: "PC" },
            { value: "Browser", label: "Browser" },
          ]}
        />
        <Filter
          label="Filter by Category"
          type="category"
          filterItems={categories}
          isMulti={true}
        />
        <Filter
          label="Sort By"
          type="order"
          filterItems={[
            { value: "alphabetical", label: "alphabetical" },
            { value: "release-date", label: "release date" },
            { value: "relevance", label: "relevance" },
          ]}
        />
      </div>
      <div className={styles.gameListContainer}>
        {games?.map((game: any) => {
          return (
            <Card
              key={game.id}
              id={game.id}
              title={game.title}
              imageUrl={game.thumbnail}
              description={game.shortDescription}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
