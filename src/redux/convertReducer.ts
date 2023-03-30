import { createSlice } from '@reduxjs/toolkit'

export const initialState: number = 0

export const convertSlice = createSlice({
  name: 'convert',
  initialState,
  reducers: {
    converting: (state, action) => {
      if (action.payload.currency === 'USD') {
        console.log(
          Math.round(
            action.payload.totalPrice / action.payload.currencies.USD
          ) + 'USD'
        )
        return Math.round(
          action.payload.totalPrice / action.payload.currencies.USD
        )
      } else if (action.payload.currency === 'EUR') {
        console.log(
          Math.round(
            action.payload.totalPrice / action.payload.currencies.EUR
          ) + 'EUR'
        )
        return Math.round(
          action.payload.totalPrice / action.payload.currencies.EUR
        )
      } else if (action.payload.currency === 'PLN') {
        console.log(
          Math.round(
            action.payload.totalPrice / action.payload.currencies.PLN
          ) + 'PLN'
        )
        return Math.round(
          action.payload.totalPrice / action.payload.currencies.PLN
        )
      } else {
        console.log(action.payload.totalPrice + 'UAH')
        return action.payload.totalPrice
      }
    },
  },
})

export const { converting } = convertSlice.actions

export default convertSlice.reducer
