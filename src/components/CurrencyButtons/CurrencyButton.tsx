type Props = {
  currency: string
  selectedCurrency: (currency: string) => void
}
const CurrencyButton = ({ currency, selectedCurrency }: Props) => {
  return (
    <button className="button" onClick={() => selectedCurrency(currency)}>
      {currency}
    </button>
  )
}
export default CurrencyButton
