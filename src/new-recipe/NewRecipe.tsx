import React from 'react'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import {
  Formik,
  Field,
  FieldArray,
  FormikProps,
  FieldArrayRenderProps
} from 'formik'
import { TextField } from 'formik-material-ui'

import validationSchema from './schema'
import { RecipeForm, StepForm } from './types'

const emptyStep = (): StepForm => ({ description: '', duration: 0 })

const initialValues: RecipeForm = {
  name: '',
  steps: [emptyStep()]
}

const field = (
  id: string,
  { label = undefined, type = 'text' }: { label?: string; type?: string } = {}
) => (
  <Field
    id={id}
    name={id}
    label={label || id}
    type={type}
    variant="outlined"
    fullWidth
    component={TextField}
  />
)

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
              {field('name')}
            </Grid>

            <Grid item xs={12}>
              <FieldArray
                name="steps"
                render={({ push, remove }: FieldArrayRenderProps) => (
                  <>
                    <h3>Steps</h3>
                    <Button onClick={() => push(emptyStep())}>Add Step</Button>
                    <ul>
                      {values.steps.map((step, index) => (
                        <li key={index}>
                          {field(`steps.${index}.description`, {
                            label: 'description'
                          })}

                          {field(`steps.${index}.duration`, {
                            label: 'duration',
                            type: 'number'
                          })}

                          <Button onClick={() => remove(index)}>Delete</Button>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
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
