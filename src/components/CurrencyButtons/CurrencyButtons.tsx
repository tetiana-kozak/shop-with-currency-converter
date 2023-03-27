import CurrencyButton from './CurrencyButton'
import './CurrencyButtons.scss'

type Props = {}
const CurrencyButtons = (props: Props) => {
  return (
    <>
      <div className="currency-buttons">
        <CurrencyButton>UAH</CurrencyButton>
        <CurrencyButton>USD</CurrencyButton>
        <CurrencyButton>EUR</CurrencyButton>
        <CurrencyButton>PLN</CurrencyButton>
      </div>
    </>
  )
}
export default CurrencyButtons
