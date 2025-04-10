import { createSlice } from "@reduxjs/toolkit";
import {House} from "../../types/types";

type housesState = {
  displayedHouses: House[];
  originalHouses: House[];
};

const initialState: housesState = {
  displayedHouses: [],
  originalHouses: []
};

const housesSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {
    getHouses: (state, action) => {
      state.originalHouses = action.payload; 
      state.displayedHouses = action.payload; 
    },
    getFilteredHouses: (state, action) => {
      state.displayedHouses = state.originalHouses.filter((el) => 
        el.type.includes(action.payload))
    },
  },
});

export const { getHouses, getFilteredHouses } = housesSlice.actions;

export default housesSlice.reducer;