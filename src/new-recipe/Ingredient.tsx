import React from 'react'

import { IconButton, Grid } from '@material-ui/core'

import ClearIcon from '@material-ui/icons/Clear'

import field, { select } from './field'
import { ingredientList } from './types'

interface Props {
  index: number
  remove: (index: number) => void
}

const units = () =>
  ingredientList.map((ingredient) => ({ value: ingredient, label: ingredient }))

const Ingredient = ({ index, remove }: Props) => (
  <div data-testid="ingredient" key={index}>
    <Grid container spacing={1}>
      <Grid item xs={12} sm={7}>
        {field(`ingredients.${index}.name`, {
          label: 'ingredient',
        })}
      </Grid>
      <Grid item xs={6} sm={2}>
        {field(`ingredients.${index}.quantity`, {
          label: 'quantity',
          type: 'number',
        })}
      </Grid>
      <Grid item xs={4} sm={2}>
        {select(`ingredients.${index}.unit`, units(), {
          label: 'unit',
        })}
      </Grid>
      <Grid item xs={2} sm={1}>
        <IconButton
          data-testid="remove-ingredient"
          edge="start"
          color="secondary"
          onClick={() => remove(index)}
        >
          <ClearIcon />
        </IconButton>
      </Grid>
    </Grid>
  </div>
)

export default Ingredient
