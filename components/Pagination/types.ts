import { CatalogItemType } from "@/types/types";

export type PropsPagination = {
  currentPage: number;
  itemsPerPage: number;
  displayedHouses: CatalogItemType[];
  setCurrentPage: (page: number) => void;
};
