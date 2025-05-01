import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { housesApi } from "../api/housesApi";
import { housesState, SortType } from "./types";
import { SelectedFilters } from "@/components/ui/business/FilterCheckbox/types";
import { filterBy } from "@/utils/constants";
import { CatalogItemType } from "@/types/types";

const initialState: housesState = {
  displayedHouses: [],
  originalHouses: [],
  selectedFilters: {
    environment: [],
    comfort: [],
    entertainment: [],
    typesOfHouses: [],
    typePlacement: [],
    priceRange: [1000, 50000],
  },
  sortType: "none",
};

const housesSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {
    toggleFilter: (
      state,
      action: PayloadAction<{
        category: keyof SelectedFilters;
        value: string;
      }>
    ) => {
      const { category, value } = action.payload;
      const index = state.selectedFilters[category].indexOf(value);

      if (index === -1) {
        state.selectedFilters[category].push(value);
      } else {
        state.selectedFilters[category].splice(index, 1);
      }

      housesSlice.caseReducers.applyAllFilters(state);
    },
    setHouses: (state, action: PayloadAction<CatalogItemType[]>) => {
      state.originalHouses = action.payload;
      state.displayedHouses = action.payload;
    },
    selectSingleType: (state, action: PayloadAction<string>) => {
      state.selectedFilters.typesOfHouses = [action.payload];
      housesSlice.caseReducers.applyAllFilters(state);
    },
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.selectedFilters.priceRange = action.payload;
      housesSlice.caseReducers.applyAllFilters(state);
    },
    setSortType: (state, action: PayloadAction<SortType>) => {
      state.sortType = action.payload;
      housesSlice.caseReducers.applyAllFilters(state);
    },
    resetFilters: (state) => {
      state.selectedFilters = {
        environment: [],
        comfort: [],
        entertainment: [],
        typesOfHouses: [],
        typePlacement: [],
        priceRange: [1000, 50000],
      };
      state.displayedHouses = state.originalHouses;
    },
    applyAllFilters: (state) => {
      let filteredHouses = [...state.originalHouses];

      filteredHouses = filterBy(
        state.selectedFilters.environment,
        filteredHouses,
        "environment"
      );
      filteredHouses = filterBy(
        state.selectedFilters.comfort,
        filteredHouses,
        "comfort"
      );
      filteredHouses = filterBy(
        state.selectedFilters.entertainment,
        filteredHouses,
        "entertainment"
      );
      filteredHouses = filterBy(
        state.selectedFilters.typesOfHouses,
        filteredHouses,
        "type"
      );
      filteredHouses = filterBy(
        state.selectedFilters.typePlacement,
        filteredHouses,
        "description"
      );

      const [minPrice, maxPrice] = state.selectedFilters.priceRange;
      filteredHouses = filteredHouses.filter((house) => {
        const priceNumber = parseInt(
          house.price.replace(/\s+/g, "").replace("₽", "")
        );
        return priceNumber >= minPrice && priceNumber <= maxPrice;
      });

      if (state.sortType !== "none") {
        filteredHouses.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/\s+/g, "").replace("₽", ""));
          const priceB = parseInt(b.price.replace(/\s+/g, "").replace("₽", ""));

          if (state.sortType === "cheapest") {
            return priceA - priceB;
          } else if (state.sortType === "expensive") {
            return priceB - priceA;
          }

          return 0;
        });
      }

      state.displayedHouses = filteredHouses;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      housesApi.endpoints.getHouses.matchFulfilled,
      (state, { payload }) => {
        state.originalHouses = payload;
        state.displayedHouses = payload;
      }
    );
  },
});

export const {
  toggleFilter,
  selectSingleType,
  setPriceRange,
  setSortType,
  setHouses,
  resetFilters,
} = housesSlice.actions;

export default housesSlice.reducer;
