import React from 'react'
import { Route } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'

import NewRecipe from 'new-recipe'

const App = () => (
  <main data-testid="app">
    <CssBaseline />

    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Photos</Typography>
      </Toolbar>
    </AppBar>

    <Route path="/recipes/new" component={NewRecipe} />
  </main>
)
export default App
