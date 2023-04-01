import { Container, Typography } from '@mui/material'
import './App.scss'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import CurrencyButtons from '../../components/CurrencyButtons/CurrencyButtons'
import Total from '../../components/Total/Total'
import ProductItems from '../../components/ProductItem/ProductItems'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { fetchRate } from '../../redux/currencyReducer'

type Props = {}
const App = (props: Props) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchRate())
  }, [dispatch])

  const currencies = useAppSelector((state) => state.currencyChange)

  const convertToSelectedCurrency = (
    price: number,
    selectedCurrency: string
  ) => {
    const result = Math.round(price / currencies[selectedCurrency])
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
        <Total />
        <ProductItems convertToSelectedCurrency={convertToSelectedCurrency} />
      </Container>
    </StyledEngineProvider>
  )
}
export default App
