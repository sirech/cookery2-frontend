import React from 'react'

import { Button, Grid, Card, CardContent } from '@material-ui/core'

import { Formik, FormikProps } from 'formik'

import validationSchema from './schema'
import { RecipeForm } from './types'

import Steps, { emptyStep } from './Steps'
import Ingredients, { emptyIngredient } from './Ingredients'
import field from './field'

import { newRecipe } from './newRecipe.service'

const initialValues: RecipeForm = {
  name: '',
  servings: 0,
  steps: [emptyStep()],
  ingredients: [emptyIngredient()]
}

const NewRecipe = () => (
  <section data-testid="new-recipe">
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => newRecipe(values)}
    >
      {({ handleSubmit, submitForm, values }: FormikProps<RecipeForm>) => (
        <form onSubmit={handleSubmit}>
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
                type="submit"
                onClick={submitForm}
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
export default NewRecipe
