import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { CssBaseline, Container, Box } from '@material-ui/core'

import Navigation from 'navigation'
import NewRecipe from 'new-recipe'
import RecipeList from 'recipe-list'
import RecipeDetails from 'recipe-details'

const App = () => (
  <div data-testid="app">
    <CssBaseline />

    <Navigation />

    <Box mt={12}>
      <Container component="main">
        <Switch>
          <Route path="/recipes/new" component={NewRecipe} />
          <Route path="/recipes/:id" component={RecipeDetails} />
          <Route path="/recipes" component={RecipeList} />
        </Switch>
      </Container>
    </Box>
  </div>
)
export default App
