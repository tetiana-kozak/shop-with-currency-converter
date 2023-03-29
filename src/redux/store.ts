import { configureStore } from '@reduxjs/toolkit'
import totalReducer from './totalReducer'

export const store = configureStore({
  reducer: {
    totalPrice: totalReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
