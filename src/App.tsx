import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import NewRecipe from 'new-recipe'
import RecipeList from 'recipe-list'

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
        <Switch>
          <Route path="/recipes/new" component={NewRecipe} />
          <Route path="/recipes" component={RecipeList} />
        </Switch>
      </Container>
    </Box>
  </div>
)
export default App
