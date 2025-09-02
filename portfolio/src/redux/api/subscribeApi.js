import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const subscribeApi = createApi({
  reducerPath: "subscribeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    // credentials: "include",
  }),
  endpoints: (builder) => ({
    subscribeUser: builder.mutation({
      query: (email) => ({
        url: "/subscribe",
        method: "POST",
        body: { email },
      }),
    }),
  }),
});

export const { useSubscribeUserMutation } = subscribeApi;
