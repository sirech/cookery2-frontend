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

import * as Yup from 'yup'

interface StepForm {
  description: string
  duration: number
}
interface RecipeForm {
  name: string
  steps: StepForm[]
}

const initialValues: RecipeForm = {
  name: '',
  steps: [{ description: '', duration: 0 }]
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  steps: Yup.array()
    .of(
      Yup.object().shape({
        description: Yup.string().required(),
        duration: Yup.number()
          .min(1)
          .required()
      })
    )
    .min(1)
})

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
              <Field
                id="name"
                name="name"
                label="name"
                variant="outlined"
                fullWidth
                component={TextField}
              />
            </Grid>

            <Grid item xs={12}>
              <FieldArray
                name="steps"
                render={({ push, remove }: FieldArrayRenderProps) => (
                  <>
                    <h3>Steps</h3>
                    <Button
                      onClick={() => push({ description: '', duration: 0 })}
                    >
                      Add Step
                    </Button>
                    <ul>
                      {values.steps.map((step, index) => (
                        <li key={index}>
                          <Field
                            id={`steps.${index}.description`}
                            name={`steps.${index}.description`}
                            variant="outlined"
                            fullWidth
                            component={TextField}
                          />

                          <Field
                            id={`steps.${index}.duration`}
                            name={`steps.${index}.duration`}
                            type="number"
                            variant="outlined"
                            fullWidth
                            component={TextField}
                          />

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
