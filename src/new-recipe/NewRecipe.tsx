import React from 'react'

import {
  IconButton,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader
} from '@material-ui/core'

import AddIcon from '@material-ui/icons/Add'

import { Formik, FieldArray, FormikProps, FieldArrayRenderProps } from 'formik'

import validationSchema from './schema'
import { RecipeForm, StepForm } from './types'

import Step from './Step'
import field from './field'

const emptyStep = (): StepForm => ({ description: '', duration: 0 })

const initialValues: RecipeForm = {
  name: '',
  steps: [emptyStep()]
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
              <FieldArray
                name="steps"
                render={({ push, remove }: FieldArrayRenderProps) => (
                  <Card>
                    <CardHeader
                      title="Steps"
                      action={
                        <IconButton
                          edge="start"
                          color="secondary"
                          onClick={() => push(emptyStep())}
                        >
                          <AddIcon />
                        </IconButton>
                      }
                    />
                    <CardContent>
                      {values.steps.map((_step, index) => (
                        <Box key={index} m={2}>
                          <Step index={index} remove={remove} />
                        </Box>
                      ))}
                    </CardContent>
                  </Card>
                )}
              />
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
