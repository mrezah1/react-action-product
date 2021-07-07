import { createUseStyles } from 'react-jss'
import clsx from 'utils/clsx'

const useStyle = createUseStyles({
  wrapper: {
    minHeight: '100vh',
    transition: '.22s all'
  },
  dark: {
    backgroundColor: '#30394b',
    color: '#fff'
  },
  layoutApp: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem 0',
    width: 500,
    margin: 'auto'
  }
})
const LayoutApp = ({ children, theme, ...rest }) => {
  const cls = useStyle()
  return (
    <main
      className={cls.wrapper + ' ' + (theme === 'dark' ? cls.dark : '')}
      {...rest}
    >
      <div className={cls.layoutApp}>{children}</div>
    </main>
  )
}
export default LayoutApp
