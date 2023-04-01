import { createSlice } from '@reduxjs/toolkit'

export const initialState: number = 0

export const totalSlice = createSlice({
  name: 'totalPrice',
  initialState,
  reducers: {
    addProductToTotal: (state, action) => state + action.payload,
  },
})
export const { addProductToTotal } = totalSlice.actions
export default totalSlice.reducer
