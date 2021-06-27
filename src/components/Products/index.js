import React, { useState } from 'react'
import ProductForm from './ProductForm'
import ProductSearch from './ProductSearch'
import ProductList from './ProductList'
import styles from './style'
import useProducts from 'hooks/useProducts'

const Products = () => {
  const cls = styles()
  const { data, error, loading } = useProducts()
  const [products, setProducts] = useState([])
  React.useEffect(() => {
    setProducts(data)
  }, [data])
  return (
    <div className={cls.wrapper}>
      <ProductForm glCls={cls} addProduct={setProducts} />
      <ProductSearch glCls={cls} />
      <ProductList
        glCls={cls}
        products={products}
        loading={loading}
        error={error}
      />
    </div>
  )
}
export default Products
