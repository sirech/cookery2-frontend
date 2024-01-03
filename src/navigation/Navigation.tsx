import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'

import { AppBar, Toolbar, Link, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import AccountCircle from '@material-ui/icons/AccountCircle'
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined'

import AdapterLink from 'components/adapter-link'

type ClickHandler = { onClick: () => void }
type User = { name: string }

const Login = ({ onClick }: ClickHandler) => (
  <IconButton color="inherit" onClick={onClick}>
    <AccountCircle titleAccess="Login" />
  </IconButton>
)

const Logout = ({ onClick }: ClickHandler) => (
  <IconButton color="inherit" onClick={onClick}>
    <AccountCircleOutlined titleAccess="Logout" />
  </IconButton>
)

const Navigation: React.FC = () => {
  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    user,
  } = useAuth0()
  const name = user ? (user as User).name : ''

  return (
    <AppBar data-testid="navigation">
      <Toolbar>
        <Link
          href="/recipes"
          variant="h6"
          style={{ flex: 1 }}
          color="inherit"
          underline="none"
          component={AdapterLink}
        >
          Cookery
        </Link>

        {!isAuthenticated && <Login onClick={() => void loginWithRedirect()} />}
        {user && `Hello ${name}`}
        {isAuthenticated && (
          <Logout onClick={() => void logout({ openUrl: false })} />
        )}

        {isAuthenticated && (
          <IconButton
            href="/recipes/new"
            color="inherit"
            component={AdapterLink}
          >
            <AddIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navigation
