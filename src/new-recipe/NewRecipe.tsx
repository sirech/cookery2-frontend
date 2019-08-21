import React from 'react'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import { Formik, Field, FormikProps } from 'formik'
import { TextField } from 'formik-material-ui'

import * as Yup from 'yup'

interface RecipeForm {
  name: string
}

const initialValues: RecipeForm = {
  name: ''
}

const validationSchema = Yup.object().shape({ name: Yup.string().required() })

const NewRecipe = () => (
  <section>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => console.log(values)}
    >
      {({ handleSubmit }: FormikProps<RecipeForm>) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field
                name="name"
                label="name"
                variant="outlined"
                component={TextField}
              />
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
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
