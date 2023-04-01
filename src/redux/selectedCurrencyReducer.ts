import { createSlice } from '@reduxjs/toolkit'

export const initialState: string = 'UAH'

export const selectedCurrencySlice = createSlice({
  name: 'convert',
  initialState,
  reducers: {
    selectedCurrency: (state, action) => action.payload,
  },
})

export const { selectedCurrency } = selectedCurrencySlice.actions

export default selectedCurrencySlice.reducer
