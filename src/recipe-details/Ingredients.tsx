import React from 'react'
import { Ingredient as IngredientType } from 'new-recipe/types'

import {
  Card,
  CardHeader,
  CardContent,
  Table,
  TableCell,
  TableBody,
  TableRow
} from '@material-ui/core'

interface Props {
  list: IngredientType[]
}

const Ingredients = ({ list }: Props) => (
  <Card>
    <CardHeader title="Ingredients" />
    <CardContent>
      <Table>
        <TableBody>
          {list.map((ingredient, index) => (
            <TableRow key={index}>
              <TableCell>{ingredient.name}</TableCell>
              <TableCell>{ingredient.quantity}</TableCell>
              <TableCell>{ingredient.unit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
)
export default Ingredients
