import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const subscribeApi = createApi({
  reducerPath: "subscribeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://srishylam-portfolio-2.onrender.com/api",
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
