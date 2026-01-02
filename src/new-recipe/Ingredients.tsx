import React from 'react'

import { Card, CardContent, Grid } from '@mui/material'

import { FieldArray, FieldArrayRenderProps } from 'formik'

import { Ingredient as IngredientType } from './types'

import Ingredient from './Ingredient'
import HeaderWithButton from './HeaderWithButton'

export const emptyIngredient = (): IngredientType => ({
  name: '',
  quantity: 0,
  unit: 'gr',
})

interface Props {
  list: IngredientType[]
}

const Ingredients: React.FC<Props> = ({ list }: Props) => (
  <FieldArray
    name="ingredients"
    render={(fieldArrayHelpers: FieldArrayRenderProps) => {
      const handleRemove = (removeIndex: number): void => {
        fieldArrayHelpers.remove(removeIndex)
      }
      return (
        <Card data-testid="ingredients">
          <HeaderWithButton
            title="Ingredients"
            testid="add-ingredient"
            onClick={() => fieldArrayHelpers.push(emptyIngredient())}
          />

          <CardContent>
            <Grid container direction="column" spacing={1}>
              {list.map((_step, index) => (
                <Grid item key={index}>
                  <Ingredient index={index} remove={handleRemove} />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      )
    }}
  />
)

export default Ingredients
