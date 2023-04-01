import CurrencyButton from './CurrencyButton'
import './CurrencyButtons.scss'

type Props = {}
const CurrencyButtons = (props: Props) => {
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
