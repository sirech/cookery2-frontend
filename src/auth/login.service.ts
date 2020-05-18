import { Auth0DecodedHash, WebAuth } from 'auth0-js'

const redirectUri = () => `${process.env.REACT_APP_HOST}/callback`

const auth0Client = () => {
  return new WebAuth({
    clientID: 'ThEkgdG1NndLlWoNMcEdEr2KJIs9vKad',
    domain: 'hceris.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'cookery2.hceris.com',
    redirectUri: redirectUri(),
    scope: 'openid profile create:recipes',
  })
}

export const checkLogin = (setUser: (user: string) => void) => {
  auth0Client().parseHash((err, authResult: Auth0DecodedHash | null) => {
    if (authResult && authResult.accessToken) {
      window.location.hash = ''
      const expiresAt = new Date()
      expiresAt.setSeconds(expiresAt.getSeconds() + (authResult.expiresIn || 0))

      localStorage.setItem('authToken', authResult.accessToken)
      localStorage.setItem('expiresAt', expiresAt.toString())
      localStorage.setItem('user', authResult.idTokenPayload.nickname)
      setUser(authResult.idTokenPayload.nickname)
    } else if (err) {
      console.log(err)
    }
  })
}

export const logout = (setUser: (user: null) => void) => {
  localStorage.removeItem('authToken')
  localStorage.removeItem('expiresAt')
  localStorage.removeItem('user')
  setUser(null)
}

export const login = () => {
  auth0Client().authorize()
}
