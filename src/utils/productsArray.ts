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
    price: 100,
  },
  {
    id: 2,
    title: 'iPhone 13 Pro',
    description: 'This is iPhone 13 Pro',
    price: 200,
  },
  {
    id: 3,
    title: 'iPhone 12 Pro',
    description: 'This is iPhone 12 Pro',
    price: 500,
  },
  {
    id: 4,
    title: 'iPhone 10 Pro',
    description: 'This is iPhone 10 Pro',
    price: 1000,
  },
  {
    id: 5,
    title: 'iPhone 14 Pro',
    description: 'This is iPhone 14 Pro',
    price: 1500,
  },
  {
    id: 6,
    title: 'iPhone 8',
    description: 'This is iPhone 8 ',
    price: 2000,
  },
]

export default productsArray
