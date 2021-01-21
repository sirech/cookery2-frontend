import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Auth0Provider } from '@auth0/auth0-react'
import { CssBaseline, Container, Box } from '@material-ui/core'

import Navigation from 'navigation'
import NewRecipe from 'new-recipe'
import RecipeList from 'recipe-list'
import RecipeDetails from 'recipe-details'
import Callback from 'callback'

const host = () => process.env.REACT_APP_HOST || ''
const redirectUri = () => `${host()}/callback`

const App: React.FC = () => (
  <div data-testid="app">
    <CssBaseline />

    <Auth0Provider
      domain="hceris.eu.auth0.com"
      clientId="ThEkgdG1NndLlWoNMcEdEr2KJIs9vKad"
      scope="openid profile create:recipes"
      redirectUri={redirectUri()}
    >
      <Navigation />

      <Box mt={12}>
        <Container component="main">
          <Switch>
            <Route path="/recipes/new" component={NewRecipe} />
            <Route path="/recipes/:id" component={RecipeDetails} />
            <Route path="/recipes" component={RecipeList} />
            <Route path="/callback" component={Callback} />
            <Route exact path="/" render={() => <Redirect to="/recipes" />} />
          </Switch>
        </Container>
      </Box>
    </Auth0Provider>
  </div>
)
export default App
