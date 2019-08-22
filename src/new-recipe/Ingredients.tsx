import React from 'react'

import { Card, CardContent, Grid } from '@material-ui/core'

import { FieldArray, FieldArrayRenderProps } from 'formik'

import { IngredientForm } from './types'

import Ingredient from './Ingredient'
import HeaderWithButton from './HeaderWithButton'

export const emptyIngredient = (): IngredientForm => ({
  name: '',
  quantity: 0,
  unit: 'gr'
})

interface Props {
  list: IngredientForm[]
}

const Ingredients = ({ list }: Props) => (
  <FieldArray
    name="ingredients"
    render={({ push, remove }: FieldArrayRenderProps) => (
      <Card data-testid="ingredients">
        <HeaderWithButton
          title="Ingredients"
          testid="add-ingredient"
          onClick={() => push(emptyIngredient())}
        />

        <CardContent>
          <Grid container direction="column" spacing={1}>
            {list.map((_step, index) => (
              <Grid item key={index}>
                <Ingredient index={index} remove={remove} />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    )}
  />
)

export default Ingredients
