import { createUseStyles } from 'react-jss'
import clsx from 'utils/clsx'

const useStyle = createUseStyles({
  button: {
    padding: '.65rem 1.6rem',
    borderRadius: 4,
    background: '#0f6bd9',
    color: '#fff',
    transition: '.2s all',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    position: 'relative',
    transition: '.3s all ease',
    top: 0,
    '&:hover': {
      opacity: '.8',
      top: -4
    }
  }
})
const Button = ({ children, className, ...rest }) => {
  const cls = useStyle()
  return (
    <button className={clsx(cls.button, className)} {...rest}>
      {children}
    </button>
  )
}
export default Button
