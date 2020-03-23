import React from 'react'

import {
  IconButton,
  Grid,
  Card,
  CardContent,
  CardHeader,
} from '@material-ui/core'

import ClearIcon from '@material-ui/icons/Clear'

import field from './field'

interface Props {
  index: number
  remove: (index: number) => void
}

const Step = ({ index, remove }: Props) => (
  <Card data-testid="step" key={index}>
    <CardHeader
      subheader={`Step ${index + 1}`}
      action={
        <IconButton
          data-testid="remove-step"
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
        <Grid item xs={12} sm={10}>
          {field(`steps.${index}.description`, {
            label: 'description',
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {field(`steps.${index}.duration`, {
            label: 'duration',
            type: 'number',
          })}
        </Grid>
      </Grid>
    </CardContent>
  </Card>
)

export default Step
