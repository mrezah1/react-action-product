import { createUseStyles } from 'react-jss'
import clsx from '../../utils/clsx'

const useStyle = createUseStyles({
  inputBox: {
    display: 'flex',
    flexDirection: 'column',
    '& input': {
      padding: '.65rem 1rem',
      marginTop: 6,
      borderRadius: 5,
      outline: 'none',
      border: '1px solid #ddd',
      transition: '.25s',
      '&:hover': {
        borderColor: '#4e9fff'
      },
      '&:focus': {
        borderColor: '#0f6bd9'
      }
    }
  }
})

const Input = ({ error, label, className, ...props }) => {
  const cls = useStyle()
  return (
    <div className={clsx(cls.inputBox, className)}>
      <label>{label}</label>
      <input
        type="text"
        autoComplete="off"
        {...props}
        style={{ borderColor: error && '#ff0000' }}
      />
    </div>
  )
}
export default Input
