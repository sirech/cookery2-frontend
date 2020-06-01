import React from 'react'

import { AppBar, Toolbar, Link, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import AccountCircle from '@material-ui/icons/AccountCircle'
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined'

import AdapterLink from 'components/adapter-link'
import { useAuthentication } from 'auth'

type ClickHandler = { onClick: () => void }

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
  const auth = useAuthentication()
  return (
    <AppBar data-testid="navigation">
      <Toolbar>
        <Link
          to="/recipes"
          variant="h6"
          style={{ flex: 1 }}
          color="inherit"
          underline="none"
          component={AdapterLink}
        >
          Cookery
        </Link>

        {!auth.user && <Login onClick={() => auth.login()} />}
        {auth.user && `Hello ${auth.user}`}
        {auth.user && <Logout onClick={() => auth.logout()} />}

        {auth.user && (
          <IconButton to="/recipes/new" color="inherit" component={AdapterLink}>
            <AddIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navigation
