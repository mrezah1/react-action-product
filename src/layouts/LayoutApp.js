import { createUseStyles } from 'react-jss'

const useStyle = createUseStyles({
  layoutApp: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem 0',
    width: 500,
    margin: 'auto'
  }
})
const LayoutApp = ({ children }) => {
  const cls = useStyle()
  return <div className={cls.layoutApp}>{children}</div>
}
export default LayoutApp
