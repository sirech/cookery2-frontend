import React, { useState, useContext, useMemo, createContext } from 'react'

interface ContextType {
  user: string | null
  login: (user: string) => void
  logout: () => void
}

const initialContext: ContextType = {
  user: null,
  login: () => {},
  logout: () => {}
}

const AuthContext = createContext(initialContext)

interface Props {
  children?: React.ReactNode
}

const AuthenticationProvider = (props: Props) => {
  const [user, setUser] = useState<string | null>(null)

  const auth = useMemo<ContextType>(
    () => ({
      user,
      login: (user: string) => setUser(user),
      logout: () => setUser(null)
    }),
    [user]
  )

  return <AuthContext.Provider value={auth} {...props} />
}

export default AuthenticationProvider

export const useAuthentication = () => useContext(AuthContext)
