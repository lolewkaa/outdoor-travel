import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { housesApi } from "../api/housesApi";
import { housesState } from "./types";
import { SelectedFilters } from "@/components/ui/business/FilterCheckbox/types";

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

      applyAllFilters(state);
    },
    selectSingleType: (state, action: PayloadAction<string>) => {
      state.selectedFilters.typesOfHouses = [action.payload];
      applyAllFilters(state);
    },
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.selectedFilters.priceRange = action.payload;
      applyAllFilters(state);
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

function applyAllFilters(state: housesState) {
  let filteredHouses = [...state.originalHouses];

  // Фильтрация по окружению
  if (state.selectedFilters.environment.length > 0) {
    filteredHouses = filteredHouses.filter((house) =>
      state.selectedFilters.environment.every((filter) =>
        house.environment.includes(filter)
      )
    );
  }

  // Фильтрация по удобствам
  if (state.selectedFilters.comfort.length > 0) {
    filteredHouses = filteredHouses.filter((house) =>
      state.selectedFilters.comfort.every((filter) =>
        house.comfort.includes(filter)
      )
    );
  }

  // Фильтрация по развлечениям
  if (state.selectedFilters.entertainment.length > 0) {
    filteredHouses = filteredHouses.filter((house) =>
      state.selectedFilters.entertainment.every((filter) =>
        house.entertainment.includes(filter)
      )
    );
  }

  // Фильтрация по типу дома
  if (state.selectedFilters.typesOfHouses.length > 0) {
    filteredHouses = filteredHouses.filter((house) =>
      state.selectedFilters.typesOfHouses.every((filter) =>
        house.type.includes(filter)
      )
    );
  }

  // Фильтрация по типу размещения
  if (state.selectedFilters.typePlacement.length > 0) {
    filteredHouses = filteredHouses.filter((house) =>
      state.selectedFilters.typePlacement.every((filter) =>
        house.description.includes(filter)
      )
    );
  }

  const [minPrice, maxPrice] = state.selectedFilters.priceRange;
  filteredHouses = filteredHouses.filter(house => {
    const priceNumber = parseInt(house.price.replace(/\s+/g, '').replace('₽', ''));
    return priceNumber >= minPrice && priceNumber <= maxPrice;
  });

  state.displayedHouses = filteredHouses;
}
export const { toggleFilter, selectSingleType, setPriceRange } = housesSlice.actions;

export default housesSlice.reducer;
