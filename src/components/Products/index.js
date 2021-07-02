import React, { useState } from 'react'
import ProductForm from './ProductForm'
import ProductSearch from './ProductSearch'
import ProductList from './ProductList'
import styles from './style'

const Products = () => {
  const [products, setProducts] = useState([])
  const cls = styles()
  console.log(products)
  return (
    <div className={cls.wrapper}>
      <ProductForm glCls={cls} addProduct={setProducts} />
      <ProductSearch glCls={cls} addProduct={setProducts} />
      <ProductList glCls={cls} addProduct={setProducts} />
    </div>
  )
}
export default Products
