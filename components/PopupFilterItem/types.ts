import { SelectedFilters } from "../ui/business/FilterCheckbox/types";

export type PopupFilterItemProps = {
  name: string;
  filterArray: string[];
  category: keyof SelectedFilters;
};
