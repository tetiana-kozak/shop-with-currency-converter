import { converting } from '../../redux/convertReducer'
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
      onClick={() => dispatch(converting({ currency, totalPrice, currencies }))}
    >
      {currency}
    </button>
  )
}
export default CurrencyButton
