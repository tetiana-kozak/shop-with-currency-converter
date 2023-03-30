import { configureStore } from '@reduxjs/toolkit'
import currencyReducer from './currencyReducer'
import totalReducer from './totalReducer'

export const store = configureStore({
  reducer: {
    totalPrice: totalReducer,
    currencyChange: currencyReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
