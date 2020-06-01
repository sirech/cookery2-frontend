import React from 'react'
import { useAsync } from 'react-use'

import { Grid } from '@material-ui/core'

import { recipeList } from './recipeList.service'
import Recipe from 'components/recipe'

const RecipeList: React.FC = () => {
  const state = useAsync(recipeList, [])

  return (
    <section data-testid="recipe-list">
      <>
        {state.loading ? (
          <div>Loading...</div>
        ) : state.error ? (
          Error
        ) : (
          <>
            <Grid container spacing={2}>
              {(state.value || []).map((recipe, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={2}>
                  <Recipe recipe={recipe} showActions />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </>
    </section>
  )
}
export default RecipeList
