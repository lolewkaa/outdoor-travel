import { CatalogItemType } from "@/types/types";
export type housesState = {
  displayedHouses: CatalogItemType[];
  originalHouses: CatalogItemType[];
  selectedFilters: SelectedFilters;
  sortType: SortType;
};
type SelectedFilters = {
  environment: string[];
  comfort: string[];
  entertainment: string[];
  typesOfHouses: string[];
  typePlacement: string[];
  priceRange: [number, number];
};

export type SortType = "cheapest" | "expensive" | "none";
