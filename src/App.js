import { useContext } from 'react'
import Products from 'components/Products'
import { AuthContext } from 'context/auth-context'
import LayoutApp from 'layouts/LayoutApp'
import Auth from 'components/Auth'

function App() {
  const { isAuth } = useContext(AuthContext)
  return <LayoutApp>{isAuth ? <Products /> : <Auth />}</LayoutApp>
}

export default App
