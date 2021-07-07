import { useContext } from 'react'
import Products from 'components/Products'
import { AuthContext } from 'context/auth-context'
import LayoutApp from 'layouts/LayoutApp'
import Auth from 'components/Auth'
import useDarkMode from 'hooks/useDarkMode'

function App() {
  const { isAuth } = useContext(AuthContext)
  const [theme, toggleTheme] = useDarkMode()
  return (
    <LayoutApp theme={theme}>
      {isAuth ? <Products toggleTheme={toggleTheme} /> : <Auth />}
    </LayoutApp>
  )
}

export default App
