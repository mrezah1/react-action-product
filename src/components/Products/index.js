import React, { useState, useReducer } from 'react'
import ProductForm from './ProductForm'
import ProductSearch from './ProductSearch'
import ProductList from './ProductList'
import useStyle from './style'
import useProducts from 'hooks/useProducts'
import Button from 'components/global/Button'

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
const Products = ({ toggleTheme }) => {
  const [products, dispatch] = useReducer(productReducer, [])
  const { data, error, loading } = useProducts()
  React.useEffect(() => {
    dispatch({ type: 'SET', product: data })
  }, [data])
  const cls = useStyle()

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
      <Button onClick={() => toggleTheme()}>Change theme</Button>
    </>
  )
}
export default Products
