import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import CurrencyButton from './CurrencyButton'
import './CurrencyButtons.scss'

type Props = {}
const CurrencyButtons = (props: Props) => {
  const currencies = useAppSelector((state) => state.currencyChange)

  console.log('currencies', currencies)
  const dispatch = useAppDispatch()

  let totalPrice = useAppSelector((state) => state.totalPrice)

  return (
    <>
      <div className="currency-buttons">
        <CurrencyButton currency="UAH" />
        <CurrencyButton currency="USD" />
        <CurrencyButton currency="EUR" />
        <CurrencyButton currency="PLN" />
      </div>
    </>
  )
}
export default CurrencyButtons
