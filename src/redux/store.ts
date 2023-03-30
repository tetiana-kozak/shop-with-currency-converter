import { configureStore } from '@reduxjs/toolkit'
import convertReducer from './convertReducer'
import currencyReducer from './currencyReducer'
import totalReducer from './totalReducer'

export const store = configureStore({
  reducer: {
    totalPrice: totalReducer,
    currencyChange: currencyReducer,
    convertingPrice: convertReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
