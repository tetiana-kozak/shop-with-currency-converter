import { createSlice } from '@reduxjs/toolkit'

type State = number

export const initialState: State = 0

export const totalSlice = createSlice({
  name: 'totalPrice',
  initialState,
  reducers: {
    addProductToTotal: (state, action) => state + action.payload,
  },
})
export const { addProductToTotal } = totalSlice.actions
export default totalSlice.reducer
