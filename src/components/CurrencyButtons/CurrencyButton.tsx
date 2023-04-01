import { converting, selectedCurrency } from '../../redux/convertReducer'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

type Props = {
  currency: string
}
const CurrencyButton = ({ currency }: Props) => {
  const totalPrice = useAppSelector((state) => state.totalPrice)
  const currencies = useAppSelector((state) => state.currencyChange)

  const dispatch = useAppDispatch()
  return (
    <button
      className="button"
      onClick={() => {
        // dispatch(converting({ currency, totalPrice, currencies }))
        dispatch(selectedCurrency(currency))
      }}
    >
      {currency}
    </button>
  )
}
export default CurrencyButton
