import React from 'react'

import { Box, Card, CardContent } from '@material-ui/core'

import { FieldArray, FieldArrayRenderProps } from 'formik'

import { IngredientForm } from './types'

import HeaderWithButton from './HeaderWithButton'

export const emptyIngredient = (): IngredientForm => ({
  name: '0',
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
      </Card>
    )}
  />
)

export default Ingredients
