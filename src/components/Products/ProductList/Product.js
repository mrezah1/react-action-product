import useStyle from './style'
import Card from 'components/global/Card'
import { RiCloseFill } from 'react-icons/ri'
import { BiDollar } from 'react-icons/bi'

const Product = ({ title, price }) => {
  const cls = useStyle()
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
        <span className={cls.removePr}>
          <RiCloseFill size={22} />
        </span>
      </Card>
    </li>
  )
}
export default Product
