import React from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  Table,
  TableCell,
  TableBody,
  TableRow,
} from '@material-ui/core'
import { Ingredient as IngredientType } from 'new-recipe/types'

interface Props {
  list: IngredientType[]
}

const Ingredients: React.FC<Props> = ({ list }: Props) => (
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
