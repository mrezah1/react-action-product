import React from 'react'
import useProducts from 'hooks/useProducts'
import Product from './Product'

const ProductList = ({ glCls = {}, addProduct }) => {
  const { data: products, error, loading } = useProducts()
  React.useEffect(() => {
    addProduct(products)
  }, [products])
  return (
    <section className={glCls.mt2}>
      <h2>Products</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Falid to get Products</p>}
      {products && (
        <ul className={glCls.mt1}>
          {products.map((item) => (
            <Product key={item.id} {...item} />
          ))}
        </ul>
      )}
    </section>
  )
}
export default ProductList
