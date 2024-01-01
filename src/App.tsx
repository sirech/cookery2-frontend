import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import { CssBaseline, Container, Box } from '@material-ui/core'

import Navigation from 'navigation'
import NewRecipe from 'new-recipe'
import RecipeList from 'recipe-list'
import RecipeDetails from 'recipe-details'
import Callback from 'callback'

const App: React.FC = () => (
  <div data-testid="app">
    <CssBaseline />

    <Navigation />

    <Box mt={12}>
      <Container component="main">
        <Routes>
          <Route path="/recipes/new" element={<NewRecipe />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/callback" element={<Callback />} />
          <Route path="/" element={<Navigate replace to="/recipes" />} />
        </Routes>
      </Container>
    </Box>
  </div>
)
export default App
