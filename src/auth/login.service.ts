import { Auth0DecodedHash, WebAuth } from 'auth0-js'

const host = () => process.env.REACT_APP_HOST || ''
const redirectUri = () => `${host()}/callback`

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

export const checkLogin = (setUser: (user: string) => void): void => {
  auth0Client().parseHash((err, authResult: Auth0DecodedHash | null) => {
    if (authResult && authResult.accessToken) {
      window.location.hash = ''
      const expiresAt = new Date()
      expiresAt.setSeconds(expiresAt.getSeconds() + (authResult.expiresIn || 0))

      localStorage.setItem('authToken', authResult.accessToken)
      localStorage.setItem('expiresAt', expiresAt.toString())

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      localStorage.setItem('user', authResult.idTokenPayload.nickname)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      setUser(authResult.idTokenPayload.nickname)
    } else if (err) {
      console.log(err)
    }
  })
}

export const logout = (setUser: (user: null) => void): void => {
  localStorage.removeItem('authToken')
  localStorage.removeItem('expiresAt')
  localStorage.removeItem('user')
  setUser(null)
}

export const login = (): void => {
  auth0Client().authorize()
}
