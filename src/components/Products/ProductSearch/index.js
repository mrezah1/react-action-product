import React, { useState, useEffect } from 'react'
import Card from 'components/global/Card'
import Input from 'components/global/Input'
import useFetch from 'hooks/useFetch'
import useStyle from './style'
import useProducts from 'hooks/useProducts'

const ProductSearch = ({ glCls = {}, addProducts }) => {
  const cls = useStyle()
  const [inputSearch, setInputSearch] = useState('')
  const query =
    inputSearch.trim().length === 0
      ? ''
      : `?orderBy="title"&equalTo="${inputSearch}"`
  const { data } = useProducts(query)
  // console.log(data)
  // useEffect(() => {}, [inputSearch])
  return (
    <section className={glCls.mt1}>
      <Card>
        <Input
          value={inputSearch}
          placeHolder="Search..."
          label="Search"
          onChange={({ target }) => setInputSearch(target.value)}
          className={cls.flexInput}
        />
      </Card>
    </section>
  )
}
export default ProductSearch
