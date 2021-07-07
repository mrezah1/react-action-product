import { useReducer, useEffect } from 'react'
import ProductForm from './ProductForm'
import ProductSearch from './ProductSearch'
import ProductList from './ProductList'
import useProducts from 'hooks/useProducts'

const productReducer = (state, action) => {
  const { type, product } = action
  switch (type) {
    case 'SET':
      return product
    case 'ADD':
      return [...(state || []), product]
    case 'DELETE':
      return state.filter((item) => item.id !== product.id)
    default:
      throw new Error('Action undefined')
  }
}
const Products = () => {
  const [products, dispatch] = useReducer(productReducer, [])
  const { data, error, loading } = useProducts()
  useEffect(() => {
    dispatch({ type: 'SET', product: data })
  }, [data])

  return (
    <>
      <ProductForm dispatch={dispatch} />
      <ProductSearch dispatch={dispatch} />
      <ProductList
        dispatch={dispatch}
        products={products}
        error={error}
        loading={loading}
      />
    </>
  )
}
export default Products
