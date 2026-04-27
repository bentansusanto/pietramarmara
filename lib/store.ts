import { configureStore } from '@reduxjs/toolkit'
import { pietraApi } from './services/pietraApi'

export const store = configureStore({
  reducer: {
    [pietraApi.reducerPath]: pietraApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(pietraApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
