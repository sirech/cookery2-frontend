import React from 'react'

import { Box, Card, CardContent, Grid } from '@material-ui/core'

import { FieldArray, FieldArrayRenderProps } from 'formik'

import { StepForm } from './types'

import Step from './Step'
import HeaderWithButton from './HeaderWithButton'

export const emptyStep = (): StepForm => ({ description: '', duration: 0 })

interface Props {
  list: StepForm[]
}

const Steps = ({ list }: Props) => (
  <FieldArray
    name="steps"
    render={({ push, remove }: FieldArrayRenderProps) => (
      <Card data-testid="steps">
        <HeaderWithButton
          title="Steps"
          testid="add-step"
          onClick={() => push(emptyStep())}
        />

        <CardContent>
          <Grid container direction="column" spacing={1}>
            {list.map((_step, index) => (
              <Grid item key={index}>
                <Step index={index} remove={remove} />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    )}
  />
)

export default Steps
