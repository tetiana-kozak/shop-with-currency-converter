import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import CurrencyButton from './CurrencyButton'
import './CurrencyButtons.scss'

type Props = {}
const CurrencyButtons = (props: Props) => {
  const currencies = useAppSelector((state) => state.currencyChange)
  const dispatch = useAppDispatch()

  console.log('currencies', currencies)
  console.log('currencies.USD', currencies.USD)

  let totalPrice = useAppSelector((state) => state.totalPrice)

  const selectedCurrency = (currency: string) => {
    let selectedCurrency = currency

    if (selectedCurrency === 'USD') {
      totalPrice = totalPrice / currencies.USD
    } else if (selectedCurrency === 'EUR') {
      totalPrice = totalPrice / currencies.EUR
    } else if (selectedCurrency === 'PLN') {
      totalPrice = totalPrice / currencies.PLN
    }
  }

  return (
    <>
      <div className="currency-buttons">
        <CurrencyButton selectedCurrency={selectedCurrency} currency="UAH" />
        <CurrencyButton selectedCurrency={selectedCurrency} currency="USD" />
        <CurrencyButton selectedCurrency={selectedCurrency} currency="EUR" />
        <CurrencyButton selectedCurrency={selectedCurrency} currency="PLN" />
      </div>
    </>
  )
}
export default CurrencyButtons
