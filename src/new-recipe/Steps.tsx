import React from 'react'

import {
  IconButton,
  Box,
  Card,
  CardContent,
  CardHeader
} from '@material-ui/core'

import AddIcon from '@material-ui/icons/Add'

import { FieldArray, FieldArrayRenderProps } from 'formik'

import { StepForm } from './types'

import Step from './Step'

export const emptyStep = (): StepForm => ({ description: '', duration: 0 })

interface Props {
  steps: StepForm[]
}

const Steps = ({ steps }: Props) => (
  <FieldArray
    name="steps"
    render={({ push, remove }: FieldArrayRenderProps) => (
      <Card data-testid="steps">
        <CardHeader
          title="Steps"
          action={
            <IconButton
              data-testid="add-step"
              edge="start"
              color="secondary"
              onClick={() => push(emptyStep())}
            >
              <AddIcon />
            </IconButton>
          }
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
