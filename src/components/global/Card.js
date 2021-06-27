import { createUseStyles } from 'react-jss'
import clsx from '../../utils/clsx'

const useStyle = createUseStyles({
  card: {
    padding: '1rem',
    borderRadius: 5,
    boxShadow: '0 0 25px 5px rgba(0, 0, 0, 0.07)'
  }
})
const Card = ({ children, className }) => {
  const cls = useStyle()
  return <div className={clsx(cls.card, className)}>{children}</div>
}
export default Card
