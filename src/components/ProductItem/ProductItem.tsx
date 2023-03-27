import { Card, CardContent, Typography } from '@mui/material'
import './ProductItem.scss'

type Props = {}

const ProductItem = (props: Props) => {
  return (
    <Card variant="outlined">
      <CardContent className="product-card">
        <Typography variant="h5" className="title">
          iPhone 8
        </Typography>
        <Typography component="p" className="description">
          This is iPhone 8
        </Typography>
        <div className="buy-box">
          <Typography component="div" className="price">
            750 EUR
          </Typography>
          <button className="buy-button">Buy</button>
        </div>
      </CardContent>
    </Card>
  )
}
export default ProductItem
