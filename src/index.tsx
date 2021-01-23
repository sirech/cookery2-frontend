import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { Auth0Provider } from '@auth0/auth0-react'

import App from './App'

const host = () => process.env.REACT_APP_HOST || ''
const redirectUri = () => `${host()}/callback`

render(
  <BrowserRouter>
    <Auth0Provider
      domain="hceris.eu.auth0.com"
      clientId="ThEkgdG1NndLlWoNMcEdEr2KJIs9vKad"
      scope="openid profile create:recipes"
      audience="cookery2.hceris.com"
      redirectUri={redirectUri()}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
