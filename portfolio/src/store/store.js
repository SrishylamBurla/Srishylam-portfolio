import { configureStore } from '@reduxjs/toolkit'
import { subscribeApi } from '../redux/api/subscribeApi'

export const store = configureStore({
  reducer: {
    [subscribeApi.reducerPath]: subscribeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(subscribeApi.middleware),
})