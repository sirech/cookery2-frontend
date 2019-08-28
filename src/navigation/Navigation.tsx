import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Navigation = () => (
  <AppBar data-testid="navigation">
    <Toolbar>
      <Typography variant="h6">Cookery</Typography>
    </Toolbar>
  </AppBar>
)

export default Navigation
