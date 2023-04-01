import { Container, Typography } from '@mui/material'
import './App.scss'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import CurrencyButtons from '../../components/CurrencyButtons/CurrencyButtons'
import Total from '../../components/Total/Total'
import ProductItems from '../../components/ProductItem/ProductItems'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { fetchRate } from '../../redux/exchangeRateReducer'

type Props = {}

const App = (props: Props) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchRate())
  }, [dispatch])

  const currencies = useAppSelector((state) => state.exchangeRate)

  const convertToSelectedCurrency = (
    price: number,
    selectedCurrency: string
  ) => {
    const result = +(price / currencies[selectedCurrency]).toFixed(2)
    return result
  }

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
        <Total convertToSelectedCurrency={convertToSelectedCurrency} />
        <ProductItems convertToSelectedCurrency={convertToSelectedCurrency} />
      </Container>
    </StyledEngineProvider>
  )
}
export default App
