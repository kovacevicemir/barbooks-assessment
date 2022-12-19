import { createContext } from "react";

export const defaultFilters = {
    platform: "",
    category: [],
    order: "",
    title: ""
};

export interface IFiltersContext {
    platform: string,
    category: string[],
    order: string,
    title: string
}

export const FiltersContext = createContext({});