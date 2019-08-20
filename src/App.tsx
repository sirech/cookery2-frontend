import React from 'react'
import { Route } from 'react-router-dom'

import NewRecipe from 'new-recipe'

const App = () => (
  <main>
    <Route path="/recipes/new" component={NewRecipe} />
  </main>
)
export default App
