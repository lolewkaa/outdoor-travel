import { SelectedFilters } from "../ui/business/FilterCheckbox/types";

export type PopupFilterItemProps = {
    name: string; 
     array: string[];
     category: keyof SelectedFilters;
}