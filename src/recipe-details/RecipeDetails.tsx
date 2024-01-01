import React from 'react'
import { useAsync } from 'react-use'
import { useNavigate, useParams } from 'react-router-dom'

import { Button, Grid } from '@material-ui/core'

import { recipeDetails } from './recipeDetails.service'

import Steps from './Steps'
import Ingredients from './Ingredients'
import Recipe from 'components/recipe'
import { Recipe as RecipeType } from 'new-recipe/types'

const RecipeDetails = ({}) => {
  const { id } = useParams<string>()

  if (!id) {
    return <></>
  }

  return <RecipeDetailsImpl id={id} />
}

const RecipeDetailsImpl = ({ id }: { id: string }) => {
  const navigate = useNavigate()
  const state = useAsync(
    async (): Promise<RecipeType> => recipeDetails(id),
    [id],
  )

  const recipe: RecipeType = state.value || {
    id: 0,
    name: '',
    servings: 0,
    duration: 0,
    steps: [],
    ingredients: [],
  }

  return (
    <>
      {state.loading ? (
        <div>Loading...</div>
      ) : state.error ? (
        Error
      ) : (
        <section data-testid="recipe-details">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Recipe recipe={recipe} showActions={false} />
            </Grid>

            <Grid item xs={12} md={6}>
              <Steps list={recipe.steps} />
            </Grid>

            <Grid item xs={12} md={6}>
              <Ingredients list={recipe.ingredients} />
            </Grid>

            <Grid item xs={12}>
              <Button
                color="primary"
                variant="contained"
                onClick={() => navigate(-1)}
              >
                Back
              </Button>
            </Grid>
          </Grid>
        </section>
      )}
    </>
  )
}

export default RecipeDetails
