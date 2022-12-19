import { IFiltersContext } from "../context/FiltersContext";

type IGame = {
  platform?: string;
  genre?: string;
  title?: string;
};

export const filtersLogic = (
  data: object[],
  filters: IFiltersContext,
  games: object[]
) => {
  let filteredGames = data;

  //@filter by platform
  if (filters.platform && data) {
    if (filters.platform === "ALL") {
      return games;
    }
    filteredGames = data.filter((g: IGame) => {
      if (g.platform) return g?.platform.includes(filters.platform) !== false;
    });
  }

  //@filter by order (sortBy)
  if (filters.order && filteredGames) {
    filteredGames = filteredGames.sort(function (a: any, b: any): any {
      if (filters.order === "alphabetical") {
        return a.title < b.title ? -1 : 1;
      }
      if (filters.order === "release-date") {
        const dateA: any = new Date(a.releaseDate).getTime();
        const dateB: any = new Date(b.releaseDate).getTime();
        return dateA > dateB ? 1 : -1;
      }
      //How to sort by relevance - based on what ?
    });
  }

  //@filter by category
  if (filters.category.length > 0 && filteredGames) {
    filteredGames = filteredGames.filter((g: IGame) => {
      if (g.genre && filters.category.includes(g.genre.toLowerCase())) {
        return g;
      }
    });
  }

  //@search by title [search box]
  if (filters.title !== "" && filteredGames) {
    let found: object[] = [];
    filteredGames.find((g: IGame) => {
      if (g.title === filters.title) {
        found.push(g);
      }
    });
    filteredGames = found;
  }

  return filteredGames;
};
