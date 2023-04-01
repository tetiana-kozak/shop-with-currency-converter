import { configureStore } from '@reduxjs/toolkit'
import selectedCurrencyReducer from './selectedCurrencyReducer'
import exchangeRateReducer from './exchangeRateReducer'
import totalReducer from './totalReducer'

export const store = configureStore({
  reducer: {
    totalPrice: totalReducer,
    exchangeRate: exchangeRateReducer,
    selectedCurrency: selectedCurrencyReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
