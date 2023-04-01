import { Grid } from '@mui/material'
import productsArray from '../../utils/productsArray'
import ProductItem from './ProductItem'

type Props = {
  convertToSelectedCurrency: (price: number, selectedCurrency: string) => number
}

const ProductItems = ({ convertToSelectedCurrency }: Props) => {
  return (
    <Grid container spacing={4} sx={{ margin: '40px 0' }}>
      {productsArray.map(({ id, title, description, price }) => (
        <Grid item xs={12} sm={6} md={4} key={id}>
          <ProductItem
            title={title}
            description={description}
            price={price}
            convertToSelectedCurrency={convertToSelectedCurrency}
          />
        </Grid>
      ))}
    </Grid>
  )
}
export default ProductItems
