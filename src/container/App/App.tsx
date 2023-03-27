import { Container, Grid, Typography } from '@mui/material'
import './App.scss'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import CurrencyButtons from '../../components/CurrencyButtons/CurrencyButtons'
import ProductItem from '../../components/ProductItem/ProductItem'
import Total from '../../components/Total/Total'

type Props = {}
const App = (props: Props) => {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Container sx={{ padding: '60px 0' }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ textAlign: 'center', fontWeight: '600' }}
        >
          Product shop
        </Typography>
        <CurrencyButtons />
        <Total />
        <Grid container spacing={4} sx={{ margin: '40px 0' }}>
          <Grid item xs={12} sm={6} md={4}>
            <ProductItem />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProductItem />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProductItem />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProductItem />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProductItem />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProductItem />
          </Grid>
        </Grid>
      </Container>
    </StyledEngineProvider>
  )
}
export default App
