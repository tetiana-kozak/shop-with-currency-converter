import { useAppSelector } from '../../redux/hooks'
import './Total.scss'

type Props = {
  convertToSelectedCurrency: (price: number, selectedCurrency: string) => number
}

const Total = ({ convertToSelectedCurrency }: Props) => {
  const totalPrice = useAppSelector((state) => state.totalPrice)
  const convertedPrice = useAppSelector((state) => state.convertingPrice)
  const isConverted = useAppSelector((state) => state.convertingPrice)

  const selectedCurrency = useAppSelector((state) => state.convertingPrice)

  return (
    <div className="total">
      Total: {convertToSelectedCurrency(totalPrice, selectedCurrency)}{' '}
      {selectedCurrency}
    </div>
  )
}
export default Total
