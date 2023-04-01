import { useAppSelector } from '../../redux/hooks'
import './Total.scss'

type Props = {
  convertToSelectedCurrency: (price: number, selectedCurrency: string) => number
}

const Total = ({ convertToSelectedCurrency }: Props) => {
  const totalPrice = useAppSelector((state) => state.totalPrice)
  const selectedCurrency = useAppSelector((state) => state.selectedCurrency)

  return (
    <div className="total">
      Total: {convertToSelectedCurrency(totalPrice, selectedCurrency)}{' '}
      {selectedCurrency}
    </div>
  )
}
export default Total
