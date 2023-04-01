import { selectedCurrency } from '../../redux/selectedCurrencyReducer'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

type Props = {
  currency: string
}
const CurrencyButton = ({ currency }: Props) => {
  const selectedCurrencyValue = useAppSelector(
    (state) => state.selectedCurrency
  )
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
