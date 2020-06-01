import { F } from 'ramda'
import React, { useState, useContext, useMemo, createContext } from 'react'

import { login, checkLogin, logout } from './login.service'

interface ContextType {
  user: string | null
  login: () => void
  logout: () => void
  checkLogin: () => void
}

const initialContext: ContextType = {
  user: null,
  login: F,
  logout: F,
  checkLogin: F,
}

const AuthContext = createContext(initialContext)

interface Props {
  children?: React.ReactNode
}

const AuthenticationProvider: React.FC<Props> = (props: Props) => {
  const expiresAt = localStorage.getItem('expiresAt')

  if (expiresAt && Date.parse(expiresAt) < Date.now()) {
    localStorage.removeItem('authToken')
    localStorage.removeItem('expiresAt')
    localStorage.removeItem('user')
  }

  const [user, setUser] = useState<string | null>(localStorage.getItem('user'))

  const auth = useMemo<ContextType>(
    () => ({
      user,
      login,
      logout: () => logout(setUser),
      checkLogin: () => checkLogin(setUser),
    }),
    [user]
  )

  return <AuthContext.Provider value={auth} {...props} />
}

export default AuthenticationProvider

export const useAuthentication = (): ContextType => useContext(AuthContext)
