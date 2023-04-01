import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export type Currencies = {
  [key: string]: number
}
const initialState: Currencies = { USD: 0, EUR: 0, PLN: 0, UAH: 0 }

const currencyList = ['USD', 'EUR', 'PLN']

export const fetchRate = createAsyncThunk<Currencies, undefined>(
  'fetchRate',
  async () => {
    const response = await axios.get(
      'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
    )
    const filteredCurrency = response.data.filter((exchange: { cc: string }) =>
      currencyList.includes(exchange.cc)
    )

    const filteredCurrencyObj: Currencies = {
      USD: filteredCurrency[0].rate,
      EUR: filteredCurrency[1].rate,
      PLN: filteredCurrency[2].rate,
      UAH: 1,
    }

    return filteredCurrencyObj
  }
)

export const exchangeRateSlice = createSlice({
  name: 'exchangeRate',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      fetchRate.fulfilled,
      (state, action) => (state = action.payload)
    )
  },
})

export default exchangeRateSlice.reducer
