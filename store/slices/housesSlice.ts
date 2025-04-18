import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { housesApi } from "../api/housesApi";
import { housesState } from "./types";
import { SelectedFilters } from "@/components/ui/business/FilterCheckbox/types";
import { filterBy } from "@/utils/constants";

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
    selectSingleType: (state, action: PayloadAction<string>) => {
      state.selectedFilters.typesOfHouses = [action.payload];
      housesSlice.caseReducers.applyAllFilters(state);
    },
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.selectedFilters.priceRange = action.payload;
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

      filteredHouses = filterBy(state.selectedFilters.environment, filteredHouses, 'environment');
      filteredHouses = filterBy(state.selectedFilters.comfort, filteredHouses, 'comfort');
      filteredHouses = filterBy(state.selectedFilters.entertainment, filteredHouses, 'entertainment');
      filteredHouses = filterBy(state.selectedFilters.typesOfHouses, filteredHouses, 'type');
      filteredHouses = filterBy(state.selectedFilters.typePlacement, filteredHouses, 'description');

      const [minPrice, maxPrice] = state.selectedFilters.priceRange;
      filteredHouses = filteredHouses.filter(house => {
        const priceNumber = parseInt(house.price.replace(/\s+/g, '').replace('₽', ''));
        return priceNumber >= minPrice && priceNumber <= maxPrice;
      });

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


export const { toggleFilter, selectSingleType, setPriceRange } = housesSlice.actions;

export default housesSlice.reducer;
