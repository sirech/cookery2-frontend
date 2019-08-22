import React from 'react'

import { Button, Grid, Card, CardContent } from '@material-ui/core'

import { Formik, FormikProps } from 'formik'

import validationSchema from './schema'
import { RecipeForm } from './types'

import Steps, { emptyStep } from './Steps'
import Ingredients, { emptyIngredient } from './Ingredients'
import field from './field'

const initialValues: RecipeForm = {
  name: '',
  steps: [emptyStep()],
  ingredients: [emptyIngredient()]
}

const NewRecipe = () => (
  <section data-testid="new-recipe">
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => console.log(values)}
    >
      {({ handleSubmit, values }: FormikProps<RecipeForm>) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card>
                <CardContent>{field('name')}</CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Steps list={values.steps} />
            </Grid>

            <Grid item xs={12}>
              <Ingredients list={values.ingredients} />
            </Grid>

            <Grid item xs={12}>
              <Button color="primary" variant="contained" type="submit">
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
