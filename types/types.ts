import { SelectedFilters } from "@/components/ui/business/FilterCheckbox/types";

export type CatalogItemType = {
    id: string;
    title: string;
    description: string;
    location: string;
    gallery: Array<string>;
    price: string;
    discount: string;
    about: string;
    type: Array<string>;
    fullLocation: string;
    info: string;
    environment: Array<string>;
    comfort: Array<string>;
    entertainment: Array<string>;
}

export type FilterableProperty = 'environment' | 'comfort' | 'entertainment' | 'type' | 'description';

export type FilterConfig = {
  name: string;
  category: keyof SelectedFilters;
  array: string[];
};