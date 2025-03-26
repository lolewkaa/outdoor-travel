import { createSlice } from "@reduxjs/toolkit";
import {House} from "../../types/types";

type housesState = {
  value: Array<House>;
};

const initialState: housesState = {
  value: [],
};

const housesSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {
    getHouses: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getHouses } = housesSlice.actions;

export default housesSlice.reducer;