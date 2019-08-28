import React from 'react'
import { Link as RouterLink, LinkProps } from 'react-router-dom'

import { AppBar, Toolbar, Link, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => <RouterLink innerRef={ref} {...props} />
)
AdapterLink.displayName = 'AdapterLink'

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
