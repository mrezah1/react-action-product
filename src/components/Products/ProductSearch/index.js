import { useState } from 'react'
import Card from 'components/global/Card'
import Input from 'components/global/Input'
import useStyle from './style'
import { IoSearchOutline } from 'react-icons/io'

const ProductSearch = ({ glCls }) => {
  const cls = useStyle()
  const [inputSearch, setInputSearch] = useState('')
  return (
    <section className={glCls.mt1}>
      <Card>
        <Input
          value={inputSearch}
          placeHolder="Search..."
          label="Search"
          onChange={(e) => setInputSearch(e.target.value)}
          className={cls.flexInput}
        />
      </Card>
    </section>
  )
}
export default ProductSearch
