type Props = {
  children: React.ReactNode
}
const CurrencyButton = ({ children }: Props) => {
  return <button className="button">{children}</button>
}
export default CurrencyButton
