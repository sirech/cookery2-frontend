import React from 'react'
import { useAsync } from 'react-use'
import { RouteComponentProps } from 'react-router-dom'

import { Button, Grid, Card, CardContent } from '@material-ui/core'

import { Recipe as RecipeType } from './types'
import { recipeDetails } from './recipeDetails.service'

type Props = RouteComponentProps<{ id: string }>

const RecipeDetails = ({
  match: {
    params: { id }
  },
  history
}: Props) => {
  const state = useAsync(async (): Promise<RecipeType> => {
    return await recipeDetails(id).then(r => r.data)
  }, [id])

  const recipe = state.value || {
    name: '',
    servings: 0,
    duration: 0,
    steps: [],
    ingredients: []
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
              <Card>
                <CardContent>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>{recipe.name}</Grid>
                    <Grid item>{recipe.servings}</Grid>
                    <Grid item>{recipe.duration}</Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Button
                color="primary"
                variant="contained"
                onClick={() => history.goBack()}
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
