import { CatalogItemType } from "@/types/types";
export type housesState = {
  displayedHouses: CatalogItemType[];
  originalHouses: CatalogItemType[];
  selectedFilters: SelectedFilters;
  };
  type SelectedFilters = {
    environment: string[];
    comfort: string[];
    entertainment: string[];
    typesOfHouses: string[];
    typePlacement: string[];
    priceRange: [number, number];
  }