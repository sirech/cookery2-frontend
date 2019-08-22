import React from 'react'

import { Box, Card, CardContent } from '@material-ui/core'

import { FieldArray, FieldArrayRenderProps } from 'formik'

import { StepForm } from './types'

import Step from './Step'
import HeaderWithButton from './HeaderWithButton'

export const emptyStep = (): StepForm => ({ description: '', duration: 0 })

interface Props {
  steps: StepForm[]
}

const Steps = ({ steps }: Props) => (
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
          {steps.map((_step, index) => (
            <Box key={index} m={2}>
              <Step index={index} remove={remove} />
            </Box>
          ))}
        </CardContent>
      </Card>
    )}
  />
)

export default Steps
