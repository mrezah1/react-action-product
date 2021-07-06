import React from 'react'
import useGlStyle from '../style'
import Product from './Product'

const ProductList = ({ products, error, loading, dispatch }) => {
  const glCls = useGlStyle()
  return (
    <section className={glCls.mt2}>
      <h2>Products</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Falid to get Products</p>}
      {products && (
        <ul className={glCls.mt1}>
          {products.map((item) => (
            <Product key={item.id} dispatch={dispatch} {...item} />
          ))}
        </ul>
      )}
    </section>
  )
}
export default ProductList
