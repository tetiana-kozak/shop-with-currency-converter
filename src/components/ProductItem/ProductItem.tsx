import { Card, CardContent, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { addProductToTotal } from '../../redux/totalReducer'
import './ProductItem.scss'

type Props = {
  title: string
  description: string
  price: number
  convertToSelectedCurrency: (price: number, selectedCurrency: string) => number
}

const ProductItem = ({
  title,
  description,
  price,
  convertToSelectedCurrency,
}: Props) => {
  const selectedCurrency = useAppSelector((state) => state.selectedCurrency)
  const dispatch = useAppDispatch()

  return (
    <Card variant="outlined">
      <CardContent className="product-card">
        <Typography variant="h5" className="title">
          {title}
        </Typography>
        <Typography component="p" className="description">
          {description}
        </Typography>
        <div className="buy-box">
          <Typography component="div" className="price">
            {convertToSelectedCurrency(price, selectedCurrency)}{' '}
            {selectedCurrency}
          </Typography>
          <button
            className="buy-button"
            onClick={() => dispatch(addProductToTotal(price))}
          >
            Buy
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
export default ProductItem
