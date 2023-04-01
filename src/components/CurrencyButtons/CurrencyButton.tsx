import { useState } from 'react'
import { converting, selectedCurrency } from '../../redux/convertReducer'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

type Props = {
  currency: string
}
const CurrencyButton = ({ currency }: Props) => {
  const totalPrice = useAppSelector((state) => state.totalPrice)
  const currencies = useAppSelector((state) => state.currencyChange)

  const selectedCurrencyValue = useAppSelector((state) => state.convertingPrice)

  const dispatch = useAppDispatch()
  return (
    <button
      className={
        selectedCurrencyValue === currency ? 'button active-button' : 'button'
      }
      onClick={() => {
        dispatch(selectedCurrency(currency))
      }}
    >
      {currency}
    </button>
  )
}
export default CurrencyButton
