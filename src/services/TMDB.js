import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmbdApiKey = process.env.REACT_APP_TMBD_KEY;
const page = 1;

export const tmbdApi = createApi({
  reducerPath: 'tmdbApi',
  // this is for app's api call
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    // Get movies by [Type]
    getMoivies: builder.query({
      query: () => `movie/popular?page=${page}&api_key=${tmbdApiKey}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
} = tmbdApi;
