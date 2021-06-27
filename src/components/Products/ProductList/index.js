import Product from './Product'

const ProductList = ({ glCls, products, loading, error }) => {
  return (
    <section className={glCls.mt2}>
      {console.log(loading)}
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
