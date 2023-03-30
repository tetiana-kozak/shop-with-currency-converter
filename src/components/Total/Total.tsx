import { useAppSelector } from '../../redux/hooks'
import './Total.scss'

type Props = {}

const Total = (props: Props) => {
  const totalPrice = useAppSelector((state) => state.totalPrice)
  const convertedPrice = useAppSelector((state) => state.convertingPrice)
  const isConverted = useAppSelector((state) => state.convertingPrice)

  return (
    <div className="total">
      Total: {isConverted ? convertedPrice : totalPrice}
    </div>
  )
}
export default Total
