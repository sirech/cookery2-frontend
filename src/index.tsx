import React from 'react'
// eslint-disable-next-line import/no-internal-modules
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { Auth0Provider } from '@auth0/auth0-react'

import App from './App'

const host = () => process.env.REACT_APP_HOST || ''
const redirectUri = () => `${host()}/callback`

const container = document.getElementById('root')
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!)
root.render(
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
)
