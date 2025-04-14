
import { configureStore } from '@reduxjs/toolkit';
import { housesApi } from './api/housesApi';
import housesReducer from './slices/housesSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      [housesApi.reducerPath]: housesApi.reducer,
      houses: housesReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(housesApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];