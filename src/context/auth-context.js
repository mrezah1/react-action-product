import { useState, createContext } from 'react'
export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <AuthContext.Provider
      value={{
        isAuth: isAuth,
        login: setIsAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider
