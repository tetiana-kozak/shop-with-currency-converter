import { Card, CardContent, Typography } from '@mui/material'
import './ProductItem.scss'

type Props = {
  title: string
  description: string
  price: number
}

const ProductItem = ({ title, description, price }: Props) => {
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
          <button className="buy-button">Buy</button>
        </div>
      </CardContent>
    </Card>
  )
}
export default ProductItem
