import React from 'react'
import { Route } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import NewRecipe from 'new-recipe'

const App = () => (
  <div data-testid="app">
    <CssBaseline />

    <AppBar>
      <Toolbar>
        <Typography variant="h6">Cookery</Typography>
      </Toolbar>
    </AppBar>

    <Box mt={12}>
      <Container component="main">
        <Route path="/recipes/new" component={NewRecipe} />
      </Container>
    </Box>
  </div>
)
export default App
