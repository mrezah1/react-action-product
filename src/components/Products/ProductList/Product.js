import useStyle from './style'
import Card from 'components/global/Card'
import { RiCloseFill } from 'react-icons/ri'
import { BiDollar } from 'react-icons/bi'
import Api from 'Api'

const Product = ({ title, price, id, dispatch }) => {
  const cls = useStyle()
  const deleteProductHandler = () => {
    Api.delete(`/products/${id}.json`).then(() => {
      dispatch({ type: 'DELETE', product: { id } })
      console.log('Deleted')
    })
  }
  return (
    <li>
      <Card className={cls.cardPr}>
        <div>
          <span className={cls.titlePr}>{title}</span>
          <span className={cls.pricePr}>
            {price}
            <BiDollar size={20} />
          </span>
        </div>
        <span className={cls.removePr} onClick={deleteProductHandler}>
          <RiCloseFill size={22} />
        </span>
      </Card>
    </li>
  )
}
export default Product
