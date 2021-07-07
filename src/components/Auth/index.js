import { useContext } from 'react'
import Card from 'components/global/Card'
import Button from 'components/global/Button'
import { AuthContext } from 'context/auth-context'
import useStyle from './style'

const Auth = () => {
  const { login } = useContext(AuthContext)
  const cls = useStyle()
  return (
    <Card className={cls.authCard}>
      <p>Please Login for Access to Products</p>
      <Button className={cls.btn} onClick={() => login(true)}>
        Login
      </Button>
    </Card>
  )
}
export default Auth
