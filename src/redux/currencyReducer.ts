import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export type Currencies = {
  USD: number
  EUR: number
  PLN: number
}
const initialState: Currencies = { USD: 0, EUR: 0, PLN: 0 }

export const fetchRate = createAsyncThunk<Currencies, undefined>(
  'fetchRate',
  async () => {
    const response = await axios.get(
      'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
    )
    const filteredCurrency = response.data.filter(
      (exchange: { cc: string }) =>
        exchange.cc === 'USD' || exchange.cc === 'EUR' || exchange.cc === 'PLN'
    )

    const filteredCurrencyObj: Currencies = {
      USD: filteredCurrency[0].rate,
      EUR: filteredCurrency[1].rate,
      PLN: filteredCurrency[2].rate,
    }

    return filteredCurrencyObj
  }
)

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      fetchRate.fulfilled,
      (state, action) => (state = action.payload)
    )
  },
})

export default currencySlice.reducer
