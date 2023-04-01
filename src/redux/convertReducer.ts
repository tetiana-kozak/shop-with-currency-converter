import { createSlice } from '@reduxjs/toolkit'

export const initialState: string = 'UAH'

export const convertSlice = createSlice({
  name: 'convert',
  initialState,
  reducers: {
    converting: (state, action) => {
      // const result = Math.round(
      //   action.payload.totalPrice /
      //     action.payload.currencies[action.payload.currency]
      // )
      // console.log('result', result)
      // return result
    },
    selectedCurrency: (state, action) => {
      console.log('state', state)
      console.log('action.payload', action.payload)
      return action.payload
    },
  },
})

export const { converting, selectedCurrency } = convertSlice.actions

export default convertSlice.reducer
