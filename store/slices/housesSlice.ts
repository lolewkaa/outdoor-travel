import { createSlice } from "@reduxjs/toolkit";
import { housesApi } from "../api/housesApi";
import { housesState } from "./types";

const initialState: housesState = {
  displayedHouses: [],
  originalHouses: []
};

const housesSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {
    getFilteredHouses: (state, action) => {
      state.displayedHouses = state.originalHouses.filter((el) => 
        el.type.includes(action.payload))
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        housesApi.endpoints.getHouses.matchFulfilled,
        (state, { payload }) => {
          state.originalHouses = payload;
          state.displayedHouses = payload;
          console.log(payload)
        },
      );
  },
});

export const { getFilteredHouses } = housesSlice.actions;

export default housesSlice.reducer;