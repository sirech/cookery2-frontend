import React from 'react'

import { AppBar, Toolbar, Link, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import AdapterLink from 'components/adapter-link'

const Navigation = () => (
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

      <IconButton to="/recipes/new" color="inherit" component={AdapterLink}>
        <AddIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
)

export default Navigation
