import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'
import { Button, Grid, Card, CardContent } from '@material-ui/core'

import { Formik, FormikProps } from 'formik'

import { useNavigate } from 'react-router-dom'
import validationSchema from './schema'
import { RecipeForm } from './types'

import Steps, { emptyStep } from './Steps'
import Ingredients, { emptyIngredient } from './Ingredients'
import field from './field'

import { newRecipe } from './newRecipe.service'

import { fold } from 'either'

const initialValues: RecipeForm = {
  name: '',
  servings: 0,
  steps: [emptyStep()],
  ingredients: [emptyIngredient()],
}

const NewRecipe = () => {
  const { getAccessTokenSilently } = useAuth0()
  const navigate = useNavigate()

  return (
    <section data-testid="new-recipe">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values: RecipeForm) => {
          const accessToken = await getAccessTokenSilently({})

          const response = await newRecipe(values, accessToken)
          fold(
            response,
            (error) => console.log('Error happened: ', error.code),
            (response) => navigate(`/recipes/${response.id}`),
          )
        }}
      >
        {({ submitForm, values }: FormikProps<RecipeForm>) => (
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Grid container direction="column" spacing={1}>
                      <Grid item>{field('name')}</Grid>
                      <Grid item>{field('servings', { type: 'number' })}</Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <Steps list={values.steps} />
              </Grid>

              <Grid item xs={12}>
                <Ingredients list={values.ingredients} />
              </Grid>

              <Grid item xs={12}>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => void submitForm()}
                >
                  Create
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </section>
  )
}
export default NewRecipe
