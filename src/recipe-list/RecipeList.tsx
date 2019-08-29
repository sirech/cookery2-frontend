import React from 'react'
import { useAsync } from 'react-use'

import { Grid } from '@material-ui/core'

import { Recipe as RecipeType } from 'components/recipe/types'
import Recipe from 'components/recipe'
import { recipeList } from './recipeList.service'

const RecipeList = () => {
  const state = useAsync(async (): Promise<RecipeType[]> => {
    return await recipeList().then(r => r.data)
  }, [])

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
                  <Recipe recipe={recipe} />
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