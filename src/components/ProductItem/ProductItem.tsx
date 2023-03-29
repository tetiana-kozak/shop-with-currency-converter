import { Card, CardContent, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { addProductToTotal } from '../../redux/totalReducer'
import './ProductItem.scss'

type Props = {
  title: string
  description: string
  price: number
}

const ProductItem = ({ title, description, price }: Props) => {
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
            {price} UAH
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
