import React from 'react'

import { Card, CardContent, Grid } from '@mui/material'

import { FieldArray, FieldArrayRenderProps } from 'formik'

import { Step as StepType } from './types'

import Step from './Step'
import HeaderWithButton from './HeaderWithButton'

export const emptyStep = (): StepType => ({ description: '', duration: 0 })

interface Props {
  list: StepType[]
}

const Steps: React.FC<Props> = ({ list }: Props) => (
  <FieldArray
    name="steps"
    render={(fieldArrayHelpers: FieldArrayRenderProps) => {
      const handleRemove = (removeIndex: number): void => {
        fieldArrayHelpers.remove(removeIndex)
      }
      return (
        <Card data-testid="steps">
          <HeaderWithButton
            title="Steps"
            testid="add-step"
            onClick={() => fieldArrayHelpers.push(emptyStep())}
          />

          <CardContent>
            <Grid container direction="column" spacing={1}>
              {list.map((_step, index) => (
                <Grid key={index}>
                  <Step index={index} remove={handleRemove} />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      )
    }}
  />
)

export default Steps
