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

import ClearIcon from '@material-ui/icons/Clear'
import AddIcon from '@material-ui/icons/Add'

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

interface StepProps {
  index: number
  remove: (index: number) => void
}

const Step = ({ index, remove }: StepProps) => (
  <Card key={index}>
    <CardHeader
      title={`Step ${index + 1}`}
      action={
        <IconButton
          edge="start"
          color="secondary"
          onClick={() => remove(index)}
        >
          <ClearIcon />
        </IconButton>
      }
    />
    <CardContent>
      <Grid container spacing={1}>
        <Grid item xs={10}>
          {field(`steps.${index}.description`, {
            label: 'description'
          })}
        </Grid>
        <Grid item xs={2}>
          {field(`steps.${index}.duration`, {
            label: 'duration',
            type: 'number'
          })}
        </Grid>
      </Grid>
    </CardContent>
  </Card>
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
