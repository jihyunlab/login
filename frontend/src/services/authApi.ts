import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER_URL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query(body) {
        return {
          url: '/auth/login',
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
