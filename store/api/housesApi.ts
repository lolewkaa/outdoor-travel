import { CatalogItemType } from '@/types/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const housesApi = createApi({
  reducerPath: 'housesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (builder) => ({
    getHouses: builder.query<CatalogItemType[], void>({
      query: () => 'houses',
    }),
  }),
});

export const { useGetHousesQuery } = housesApi;