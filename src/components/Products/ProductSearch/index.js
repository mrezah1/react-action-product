import React, { useState, useEffect } from 'react'
import Card from 'components/global/Card'
import Input from 'components/global/Input'
import useGlStyle from '../style'
import useStyle from './style'
import useProducts from 'hooks/useProducts'
import useFirstRender from 'hooks/useFirstRender'

const ProductSearch = ({ dispatch }) => {
  const cls = useStyle()
  const glCls = useGlStyle()
  const [inputSearch, setInputSearch] = useState('')
  const firstRender = useFirstRender()
  const query =
    inputSearch.trim().length === 0
      ? ''
      : `?orderBy="title"&equalTo="${inputSearch}"`
  const { data } = useProducts(query, !firstRender)
  useEffect(() => {
    dispatch({ type: 'SET', product: data })
  }, [data])
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
export default React.memo(ProductSearch)
