export type Product = {
  id: number
  title: string
  description: string
  price: number
}

const productsArray: Product[] = [
  {
    id: 1,
    title: 'iPhone 14 Pro',
    description: 'This is iPhone 14 Pro',
    price: 40000,
  },
  {
    id: 2,
    title: 'iPhone 13 Pro',
    description: 'This is iPhone 13 Pro',
    price: 35000,
  },
  {
    id: 3,
    title: 'iPhone 12 Pro',
    description: 'This is iPhone 12 Pro',
    price: 30000,
  },
  {
    id: 4,
    title: 'iPhone 10 Pro',
    description: 'This is iPhone 10 Pro',
    price: 25000,
  },
  {
    id: 5,
    title: 'iPhone 14 Pro',
    description: 'This is iPhone 14 Pro',
    price: 20000,
  },
  {
    id: 6,
    title: 'iPhone 8',
    description: 'This is iPhone 8 ',
    price: 15000,
  },
]

export default productsArray
