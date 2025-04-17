export type FilterCheckboxProps = {
    item: string;
    category: keyof SelectedFilters;
  }

  export interface SelectedFilters {
    environment: string[];
    comfort: string[];
    entertainment: string[];
    typesOfHouses: string[];
    typePlacement: string[];
  }